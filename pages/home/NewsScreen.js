import React, { useContext, useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { PieChart } from "react-native-chart-kit";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import GeolocationHandler from "./GeolocationHandler";

const MyPieChart1 = () => {
  return (
    <>
      <GeolocationHandler />
      <Text style={styles.header}>Diet Pie Chart</Text>
      <Text>
        This chart gives information about the diet of the respondents.
      </Text>
      <PieChart
        data={[
          {
            name: "Good",
            population: 192,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "Medium",
            population: 46,
            color: "orange",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "Bad",
            population: 80,
            color: "blue",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
        ]}
        width={Dimensions.get("window").width - 16}
        height={220}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute //for the absolute number remove if you want percentage
      />
    </>
  );
};

const MyPieChart7 = () => {
  return (
    <>
      <Text style={styles.header}>Vaccine Pie Chart</Text>
      <Text>
        This chart gives information about how many vaccines do respondents had.
      </Text>
      <PieChart
        data={[
          {
            name: "One doses",
            population: 10,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "Two doses",
            population: 297,
            color: "orange",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "Three doses",
            population: 80,
            color: "yellow",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "Three+ doses",
            population: 2,
            color: "green",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "Never",
            population: 9,
            color: "blue",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
        ]}
        width={Dimensions.get("window").width - 16}
        height={220}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute //for the absolute number remove if you want percentage
      />
    </>
  );
};

const MyPieChart = () => {
  return (
    <>
      <Text style={styles.header}>Social Rate Pie Chart</Text>
      <Text>
        This chart gives information about whether the respondents go outside
        more than three days.
      </Text>

      <PieChart
        data={[
          {
            name: "No",
            population: 177,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "Yes",
            population: 141,
            color: "blue",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
        ]}
        width={Dimensions.get("window").width - 16}
        height={220}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute //for the absolute number remove if you want percentage
      />
    </>
  );
};

const MyPieChart2 = () => {
  return (
    <>
      <Text style={styles.header}>Smoker Pie Chart</Text>
      <Text>
        This chart gives information whether the respondents smokes or not.
      </Text>

      <PieChart
        data={[
          {
            name: "No",
            population: 182,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "Yes",
            population: 136,
            color: "blue",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
        ]}
        width={Dimensions.get("window").width - 16}
        height={220}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute //for the absolute number remove if you want percentage
      />
    </>
  );
};

const MyPieChart3 = () => {
  return (
    <>
      <Text style={styles.header}>Cough Breath Pie Chart</Text>
      <Text>
        This chart gives information about the respondents having trouble of
        breathing.
      </Text>
      <PieChart
        data={[
          {
            name: "No",
            population: 291,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "Yes",
            population: 27,
            color: "blue",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
        ]}
        width={Dimensions.get("window").width - 16}
        height={220}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute //for the absolute number remove if you want percentage
      />
    </>
  );
};

const MyPieChart4 = () => {
  return (
    <>
      <Text style={styles.header}>Public Transportation Pie Chart</Text>
      <Text>
        This chart gives information about the respondents using public
        transportation or not.
      </Text>

      <PieChart
        data={[
          {
            name: "No",
            population: 116,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "Yes",
            population: 202,
            color: "blue",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
        ]}
        width={Dimensions.get("window").width - 16}
        height={220}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute //for the absolute number remove if you want percentage
      />
    </>
  );
};

const MyPieChart5 = () => {
  return (
    <>
      <Text style={styles.header}>Chronological illness Pie Chart</Text>
      <Text>
        This chart gives information about the respondents has a chronological
        illnes or not.
      </Text>

      <PieChart
        data={[
          {
            name: "No",
            population: 304,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "Yes",
            population: 14,
            color: "blue",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
        ]}
        width={Dimensions.get("window").width - 16}
        height={220}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute //for the absolute number remove if you want percentage
      />
    </>
  );
};

const MyPieChart6 = () => {
  return (
    <>
      <Text style={styles.header}>Loss of taste or smell Pie Chart</Text>
      <Text>
        This chart gives information about the respondents has loss of taste or
        smell or not.
      </Text>

      <PieChart
        data={[
          {
            name: "No",
            population: 307,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "Yes",
            population: 11,
            color: "blue",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
        ]}
        width={Dimensions.get("window").width - 16}
        height={220}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute //for the absolute number remove if you want percentage
      />
    </>
  );
};

const NewsScreen = ({ route }) => {
  const [loggedInUser, setLoggedInUser] = useState(route.params.user);
  const [username, setUsername] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    const regex = /([^@]+)/;
    if (loggedInUser != "") {
      const username = loggedInUser?.email.match(regex)[0];
      setUsername(username);
      const firestore = getFirestore();
      const surveyCollection = doc(firestore, "Survey DB", loggedInUser?.uid);

      getDoc(surveyCollection).then((snapshot) =>
        setScore(
          snapshot._document.data.value.mapValue.fields?.ResultScore?.mapValue
            ?.fields.Score?.stringValue
        )
      );
    }
  }, [loggedInUser, route]);

  return (
    <SafeAreaView style={styles.total}>
      <View style={styles.userInfo}>
        <View>
          <Text style={styles.textstyle}>
            Hello {username.charAt(0).toUpperCase() + username.slice(1)}
          </Text>
          <Text style={styles.textstyle}>Your Covid-19 risk is {score}%</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <MyPieChart />
            {/*Example of Pie Chart1*/}
            {/*Example of Pie Chart7*/}
            <MyPieChart7 />
            <MyPieChart1 />
            {/*Example of Pie Chart2*/}
            <MyPieChart2 />
            {/*Example of Pie Chart3*/}
            <MyPieChart3 />
            {/*Example of Pie Chart4*/}
            <MyPieChart4 />
            {/*Example of Pie Chart5*/}
            <MyPieChart5 />
            {/*Example of Pie Chart6*/}
            <MyPieChart6 />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  total: {
    flex: 1,
    backgroundColor: "white",
  },

  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
  },
  header: {
    textAlign: "center",
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
  userInfo: {
    display: "flex",

    fontSize: 24,
    padding: 16,
    marginTop: 16,
    fontSize: 24,
    backgroundColor: "#c6f0fe",
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    color: "#ffffff",
  },
  textstyle: {
    fontSize: 20,
    marginRight: 10,
    color: "gray",
  },
});
