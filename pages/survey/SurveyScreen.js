import { Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./SurveyScreenStyle";
import { surveyQuestions, checkboxAnswers } from "./SurveyQuestions";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { MaterialIcons } from "@expo/vector-icons";
import as from "../../firebase";
import { getFirestore, setDoc, doc, updateDoc } from "firebase/firestore";
import { TextInput } from "react-native-gesture-handler";

const firestore = getFirestore();
const surveyCollection = doc(firestore, "Survey DB", "Survey Answers");
const SurveyScreen = () => {
  const [questions, setQuestions] = useState(surveyQuestions);
  const [ques, setQues] = useState(0);
  const [checked, setChecked] = useState([false, false, false, false, false]);
  const [checkedFirstQuestion, setCheckedFirstQuestion] = useState([
    false,
    false,
    false,
  ]);
  const [showSurveyResult, setShowSurveyResult] = useState(false);

  const handleNextQuestion = () => {
    setQues(ques + 1);
  };

  const handleFirestoreAnswerYes = () => {
    updateDoc(surveyCollection, {
      [ques + 1]: true,
    });
    setQues(ques + 1);
  };

  const handleFirestoreAnswerNo = () => {
    updateDoc(surveyCollection, {
      [ques + 1]: false,
    });
    setQues(ques + 1);
  };

  const handlePreviousQuestion = () => {
    setQues(ques - 1);
  };

  const handleCheckBox = (event, index) => {
    const _checked = [...checked];
    _checked[index] = event.target.checked;
    setChecked(_checked);

    updateDoc(surveyCollection, {
      [ques + 1]: [...checked],
    });
  };

  const handleFirstCheckBox = (event, index) => {
    const _checked = [...checkedFirstQuestion];
    _checked[index] = event.target.checked;
    setCheckedFirstQuestion(_checked);

    updateDoc(surveyCollection, {
      [ques + 1]: [...checkedFirstQuestion],
    });
  };

  const handleRetakeSurvey = () => {
    setQues(0);
    setChecked([false, false, false, false, false]);
    setCheckedFirstQuestion([false, false, false]);
    setShowSurveyResult(false);
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
                  onPress={handleFirestoreAnswerYes}
                  style={styles.optionTouchable}
                >
                  <Text style={styles.option}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleFirestoreAnswerNo}
                  style={styles.optionTouchable}
                >
                  <Text style={styles.option}>No</Text>
                </TouchableOpacity>
              </View>
            )}

            {questions[ques].multiAnswer === true &&
              questions[ques].first === true &&
              questions[ques].checkboxAnswers.map((item, index) => (
                <View key={index} style={styles.checkOption}>
                  <TextInput
                    style={{ height: 30, width: 30 }}
                    type="checkbox"
                    checked={checkedFirstQuestion[index]}
                    onChange={(event) => handleFirstCheckBox(event, index)}
                  />
                  <Text style={{ fontSize: "20px" }}>{item}</Text>
                </View>
              ))}

            {questions[ques].multiAnswer === true &&
              questions[ques].first === false &&
              questions[ques].checkboxAnswers.map((item, index) => (
                <View key={index} style={styles.checkOption}>
                  <TextInput
                    style={{ height: 30, width: 30 }}
                    type="checkbox"
                    checked={checked[index]}
                    onChange={(event) => handleCheckBox(event, index)}
                  />
                  <Text style={{ fontSize: "20px" }}>{item}</Text>
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
              <SurveyScreenResult />
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
              <Text style={{ color: "#34A0A4", fontSize: "20px" }}>
                Retake the Survey
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSeeResults}
              style={styles.retakeSurveyTouchable}
            >
              <Text style={{ color: "#34A0A4", fontSize: "20px" }}>
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
