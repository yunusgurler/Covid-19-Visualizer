import { Text, TouchableOpacity, View, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./SurveyScreenStyle";
import { surveyQuestions } from "./SurveyQuestions";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { MaterialIcons } from "@expo/vector-icons";
import {
  getFirestore,
  doc,
  updateDoc,
  deleteDoc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import Checkbox from "expo-checkbox";
import SurveyScreenResult from "./SurveyScreenResult";

const SurveyScreen = ({ route }) => {
  const [questions, setQuestions] = useState(surveyQuestions);
  let [ques, setQues] = useState(0);
  const [checkedLastQuestion, setCheckedLastQuestion] = useState([]);
  const [checkedFirstQuestion, setCheckedFirstQuestion] = useState([]);
  const [showSurveyResult, setShowSurveyResult] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(route.params.user);
  const [surveyCollection, setSurveyCollection] = useState();
  const [retakeSurvey, setRetakeSurvey] = useState(true);
  const [dayLeft, setDayLeft] = useState(0);

  const answerString = "Answer" + [ques + 1];
  const scoreString = "Score";

  useEffect(() => {
    const firestore = getFirestore();
    const surveyCollection = doc(firestore, "Survey DB", loggedInUser?.uid);

    getDoc(surveyCollection).then((snapshot) => {
      if (snapshot?._document !== undefined && snapshot?._document !== null) {
        let endSurveyDate = new Date(
          snapshot?._document?.data?.value?.mapValue.fields?.retakeDate?.timestampValue
        );
        const loggedInDate = new Date(loggedInUser?.metadata.lastSignInTime);
        if (dateDiff(endSurveyDate, loggedInDate) < 14) {
          setRetakeSurvey(false);
        }
      } else {
        setRetakeSurvey(true);
        const surveyCollection = doc(firestore, "Survey DB", loggedInUser?.uid);
        setSurveyCollection(surveyCollection);
        setDoc(doc(firestore, "Survey DB", loggedInUser?.uid), {});
      }
    });
  }, [retakeSurvey, loggedInUser]);

  useEffect(() => {
    if (ques === 10) {
      const retakeDate = new Date();

      updateDoc(surveyCollection, {
        retakeDate: retakeDate,
      });
    }
  }, [ques]);

  const handleNextQuestion = () => {
    setQues(ques + 1);
  };

  const handleFirestoreAnswerYes = () => {
    updateDoc(surveyCollection, {
      [answerString]: {
        [answerString]: true,
        [scoreString]: questions[ques].score,
      },
    });
    setQues(ques + 1);
  };

  const handleFirestoreAnswerNo = () => {
    updateDoc(surveyCollection, {
      [answerString]: {
        [answerString]: false,
        [scoreString]: 0,
      },
    });
    setQues(ques + 1);
  };

  const handleLastCheckBox = (checkboxAnswers) => {
    setCheckedLastQuestion(checkboxAnswers.message);
    updateDoc(surveyCollection, {
      [answerString]: [checkboxAnswers],
    });
  };

  const handleFirstCheckBox = (checkboxAnswers) => {
    setCheckedFirstQuestion(checkboxAnswers.message);
    updateDoc(surveyCollection, {
      [answerString]: [checkboxAnswers],
    });
  };

  const handleRetakeSurvey = () => {
    const firestore = getFirestore();
    const surveyCollection = doc(firestore, "Survey DB", loggedInUser?.uid);

    getDoc(surveyCollection).then((snapshot) => {
      let endSurveyDate = new Date(
        snapshot._document.data.value.mapValue.fields.retakeDate?.timestampValue
      );
      const loggedInDate = new Date(loggedInUser?.metadata.lastSignInTime);

      if (dateDiff(endSurveyDate, loggedInDate) > 14) {
        setRetakeSurvey(true);
        setQues(0);
        setCheckedLastQuestion([false, false, false, false, false]);
        setCheckedFirstQuestion([false, false, false]);
        setShowSurveyResult(false);

        deleteDoc(surveyCollection)
          .then(() => console.log("Document deleted"))
          .catch((error) => console.error("Error deleting document", error));

        setDoc(doc(firestore, "Survey DB", loggedInUser?.uid), {});
      } else {
        setRetakeSurvey(false);
        Alert.alert(
          "Please Wait!",
          `Please wait ${dayLeft} days to retake the survey`,
          [
            {
              text: "Cancel",
              style: "Cancel",
            },
            { text: "Okay" },
          ]
        );
      }
    });
  };

  const dateDiff = (date1, date2) => {
    let diffTime = 0;
    if (date1 > date2) {
      diffTime = Math.abs(date1 - date2);
    } else {
      diffTime = Math.abs(date2 - date1);
    }
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDayLeft(14 - diffDays);
    return diffDays - 1;
  };

  const handleSeeResults = () => {
    setShowSurveyResult(true);
  };

  return (
    <>
      <View style={styles.container}>
        {questions.length !== ques && retakeSurvey ? (
          <View style={styles.parent}>
            <View style={styles.top}>
              <Text style={styles.questionTitle}>Question {ques + 1}</Text>
              <Text style={styles.question}>{questions[ques]?.question}</Text>
            </View>

            {questions[ques].multiAnswer === false && (
              <View style={styles.options}>
                <TouchableOpacity
                  onPress={() =>
                    handleFirestoreAnswerYes(questions[ques].score)
                  }
                  style={styles.optionTouchable}
                >
                  <Text style={styles.option}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleFirestoreAnswerNo(questions[ques].score)}
                  style={styles.optionTouchable}
                >
                  <Text style={styles.option}>No</Text>
                </TouchableOpacity>
              </View>
            )}

            {/* First Checkbox */}
            {questions[ques].multiAnswer === true &&
              questions[ques].first === true &&
              questions[ques].checkboxAnswers.map((item, index) => (
                <View key={index} style={styles.checkOption}>
                  <Checkbox
                    style={{ height: 30, width: 30, marginRight: 6 }}
                    color={checkedFirstQuestion ? "#56D6FF" : "#000000"}
                    value={checkedFirstQuestion === item.message}
                    onValueChange={() => handleFirstCheckBox(item)}
                  />
                  <Text style={{ fontSize: 20 }}>{item.message}</Text>
                </View>
              ))}

            {/* Last Checkbox */}
            {questions[ques].multiAnswer === true &&
              questions[ques].first === false &&
              questions[ques].checkboxAnswers.map((item, index) => (
                <View key={index} style={styles.checkOption}>
                  <Checkbox
                    color={checkedLastQuestion ? "#56D6FF" : "#000000"}
                    style={{ height: 30, width: 30, marginRight: 6 }}
                    value={checkedLastQuestion === item.message}
                    onValueChange={() => handleLastCheckBox(item)}
                  />
                  <Text style={{ fontSize: 20 }}>{item.message}</Text>
                </View>
              ))}

            <View style={styles.bottom}>
              {questions.length !== ques && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleNextQuestion}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.buttonText}> Next </Text>
                    <MaterialIcons
                      name="navigate-next"
                      size={24}
                      color="#1A759F"
                    />
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ) : (
          <View style={styles.thanksView}>
            {showSurveyResult ? (
              <SurveyScreenResult user={loggedInUser} />
            ) : (
              <>
                <MaterialIcon name="check-circle" color="#67C4C4" size={80} />
                <Text style={styles.thanksTitle}>
                  Thank you for taking the survey
                </Text>
              </>
            )}

            <TouchableOpacity
              onPress={handleRetakeSurvey}
              style={styles.retakeSurveyTouchable}
            >
              <Text style={{ color: "#34A0A4", fontSize: 20 }}>
                Retake the Survey
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSeeResults}
              style={styles.retakeSurveyTouchable}
            >
              <Text style={{ color: "#34A0A4", fontSize: 20 }}>
                See Results
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
};

export default SurveyScreen;
