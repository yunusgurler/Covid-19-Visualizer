import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

const SurveyScreenResult = (props) => {
  const [finalScore, setFinalScore] = useState(0);
  const [loggedInUser, setLoggedInUser] = useState(props.user);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const firestore = getFirestore();
    const surveyCollection = doc(firestore, "Survey DB", loggedInUser?.uid);

    getDoc(surveyCollection).then((snapshot) =>
      handleCalculateScore(snapshot._document.data.value.mapValue.fields)
    );
    if (loggedInUser) {
      const regex = /([^@]+)/;
      if (loggedInUser != "") {
        const username = loggedInUser?.email.match(regex)[0];
        setUsername(username);
      }
    }
  }, [loggedInUser]);

  const handleCalculateScore = (data) => {
    let arrayValueScore = 0;
    let mapValueScore = 0;

    Object.values(data).map((item, index) => {
      if (Object.values(item)[0]?.fields) {
        let mapScore = Object.values(item)[0]?.fields?.Score?.integerValue;
        mapValueScore += parseInt(mapScore);
      }

      let valuesArray = Object.values(item)[0]?.values;

      if (valuesArray) {
        valuesArray &&
          valuesArray.map(
            (a) =>
              (arrayValueScore += parseInt(
                a.mapValue?.fields?.score?.integerValue
              ))
          );
      }
    });

    let result = arrayValueScore + mapValueScore;

    const firestore = getFirestore();
    const surveyCollection = doc(firestore, "Survey DB", loggedInUser?.uid);

    const scoreString = "Score";

    updateDoc(surveyCollection, {
      ResultScore: {
        [scoreString]: (result * 1.6).toFixed(2),
      },
    });
    setFinalScore(result);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.paragraph}>
          Hello {username}, your risk is % {(finalScore * 1.6).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

export default SurveyScreenResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,

    shadowColor: "#470000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    elevation: 10,
    marginTop: "20%",
    backgroundColor: "azure",
    borderRadius: 20,
  },
  paragraph: {
    margin: 24,
    fontSize: 28,
    color: "#616161",
    fontWeight: "bold",
    textAlign: "center",
  },
});
