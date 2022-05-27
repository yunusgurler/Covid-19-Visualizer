import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const SurveyScreenResult = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [finalScore, setFinalScore] = useState(0);
  const auth = getAuth();

  useEffect(() => {
    const firestore = getFirestore();
    const surveyCollection = doc(firestore, "Survey DB", "Survey Answers");

    getDoc(surveyCollection).then((snapshot) =>
      handleCalculateScore(snapshot._document.data.value.mapValue.fields)
    );
  }, []);

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

    setFinalScore(result);
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const regex = /([^@]+)/;
      if (user != "") {
        const username = user.email.match(regex)[0];
        setLoggedInUser(username);
      }
    }
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.paragraph}>
          Hello {loggedInUser}, your risk is % {finalScore * 1.6}
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
