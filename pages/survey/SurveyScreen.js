import { Text, TouchableOpacity, View } from "react-native";
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
} from "firebase/firestore";
import Checkbox from "expo-checkbox";
import SurveyScreenResult from "./SurveyScreenResult";

const SurveyScreen = ({ route }) => {
  const [questions, setQuestions] = useState(surveyQuestions);
  const [ques, setQues] = useState(0);
  const [checkedLastQuestion, setCheckedLastQuestion] = useState([]);
  const [checkedFirstQuestion, setCheckedFirstQuestion] = useState([]);
  const [showSurveyResult, setShowSurveyResult] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(route.params.user);
  const [surveyCollection, setSurveyCollection] = useState();

  useEffect(() => {
    const firestore = getFirestore();
    const surveyCollection = doc(firestore, "Survey DB", loggedInUser?.uid);
    setSurveyCollection(surveyCollection);
    setDoc(doc(firestore, "Survey DB", loggedInUser?.uid), {});
  }, [loggedInUser]);

  const answerString = "Answer" + [ques + 1];
  const scoreString = "Score";

  const handleNextQuestion = () => {
    setQues(ques + 1);
  };

  const handleFirestoreAnswerYes = (score) => {
    updateDoc(surveyCollection, {
      [answerString]: {
        [answerString]: true,
        [scoreString]: questions[ques].score,
      },
    });
    setQues(ques + 1);
  };

  const handleFirestoreAnswerNo = (score) => {
    /*  updateDoc(surveyCollection, {
      [answerString]: {
        [answerString]: false,
        [scoreString]: questions[ques].score,
      },
    }); */
    setQues(ques + 1);
  };

  const handlePreviousQuestion = () => {
    setQues(ques - 1);
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
    setQues(0);
    setCheckedLastQuestion([false, false, false, false, false]);
    setCheckedFirstQuestion([false, false, false]);
    setShowSurveyResult(false);

    deleteDoc(surveyCollection)
      .then(() => console.log("Document deleted"))
      .catch((error) => console.error("Error deleting document", error));

    setDoc(doc(firestore, "Survey DB", loggedInUser?.uid), {});
  };

  const handleSeeResults = () => {
    setShowSurveyResult(true);
  };

  return (
    <>
      <View style={styles.container}>
        {questions.length !== ques ? (
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
              {ques > 0 && (
                <TouchableOpacity
                  onPress={handlePreviousQuestion}
                  style={styles.button}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MaterialIcons
                      name="navigate-before"
                      size={24}
                      color="#1A759F"
                    />
                    <Text style={styles.buttonText}> Previous </Text>
                  </View>
                </TouchableOpacity>
              )}
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
