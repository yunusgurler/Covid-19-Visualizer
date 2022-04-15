import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./SurveyPageStyle";
import { surveyQuestions } from "./SurveyQuestions";
import { Checkbox } from "react-native-paper";

const SurveyPage = () => {
  const [questions, setQuestions] = useState(surveyQuestions);
  const [ques, setQues] = useState(0);
  const [checked, setChecked] = useState(false);

  const handleNextQuestion = () => {
    setQues(ques + 1);
  };

  const handleCheckBox = (event) => {
    console.log("event ", event);
  };

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
              <View style={styles.checkOption}>
                <Checkbox
                  status="checked"
                  key={item}
                  onPress={() => handleCheckBox(index)}
                />
                <Text style={{ marginTop: "6px" }}>{item}</Text>
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
        <View>
          <Text>Thank you for taking the survey</Text>
        </View>
      )}
    </View>
  );
};

export default SurveyPage;
