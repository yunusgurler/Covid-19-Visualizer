import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./SurveyScreenStyle";
import { surveyQuestions } from "./SurveyQuestions";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
// import database from '@react-native-firebase/database';

import firestore from '@react-native-firebase/firestore';
import firebase from "../../firebase";


const SurveyScreen = () => {
  const [questions, setQuestions] = useState(surveyQuestions);
  const [ques, setQues] = useState(0);
  const [checked, setChecked] = useState([false, false, false, false, false]);
  const surveyCollection = firestore().collection('Survey DB');
  const surveyDocument = firestore().collection('Survey DB').doc('Survey Questions');

  const handleNextQuestion = () => {
    setQues(ques + 1);
    
  };

  const handleCheckBox = (event, index) => {
    const _checked = [...checked];
    _checked[index] = event.target.checked;
    setChecked(_checked);
  };

  const handleRetakeSurvey = () => {
    setQues(0);
    setChecked([false, false, false, false, false]);
  };

  const surveyQuestions = firestore().surveyCollection.get();
  console.log(surveyQuestions)
  return (
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
                onPress={handleNextQuestion}
                style={styles.optionTouchable}
              >
                <Text style={styles.option}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleNextQuestion}
                style={styles.optionTouchable}
              >
                <Text style={styles.option}>No</Text>
              </TouchableOpacity>
            </View>
          )}

          {questions[ques].multiAnswer === true &&
            questions[ques].checkboxAnswers.map((item, index) => (
              <View key={index} style={styles.checkOption}>
                <input
                  style={{ height: 30, width: 30 }}
                  type="checkbox"
                  checked={checked[index]}
                  onChange={(event) => handleCheckBox(event, index)}
                />
                <Text style={{ fontSize: "20px" }}>{item}</Text>
              </View>
            ))}

          <View style={styles.bottom}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Skip</Text>
            </TouchableOpacity>
            {questions.length !== ques && (
              <TouchableOpacity
                style={styles.button}
                onPress={handleNextQuestion}
              >
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      ) : (
        <View style={styles.thanksView}>
          <MaterialIcon name="check-circle" color="#67C4C4" size={80} />
          <Text style={styles.thanksTitle}>
            Thank you for taking the survey
          </Text>
          <TouchableOpacity
            onPress={handleRetakeSurvey}
            style={styles.retakeSurveyTouchable}
          >
            <Text style={{ color: "white", fontSize: "20px" }}>
              Retake the Survey
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default SurveyScreen;
