import React, { useContext, useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  StackedBarChart,
} from "react-native-chart-kit";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const MyBezierLineChart = () => {
  return (
    <>
      <Text style={styles.header}>Bezier Line Chart</Text>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width - 16} // from react-native
        height={220}
        yAxisLabel={"Rs"}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

const MyLineChart = () => {
  return (
    <>
      <Text style={styles.header}>Line Chart</Text>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
              strokeWidth: 2,
            },
          ],
        }}
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
      />
    </>
  );
};

const MyBarChart = () => {
  return (
    <>
      <Text style={styles.header}>Bar Chart</Text>
      <BarChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
            },
          ],
        }}
        width={Dimensions.get("window").width - 16}
        height={220}
        yAxisLabel={"Rs"}
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
      />
    </>
  );
};
const MyStackedBarChart = () => {
  return (
    <>
      <Text style={styles.header}>Stacked Bar Chart</Text>
      <StackedBarChart
        data={{
          labels: ["Test1", "Test2"],
          legend: ["L1", "L2", "L3"],
          data: [
            [60, 60, 60],
            [30, 30, 60],
          ],
          barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"],
        }}
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
      />
    </>
  );
};

const MyPieChart1 = () => {
  return (
    <>
      <Text style={styles.header}>Diet Pie Chart</Text>
      <PieChart
        data={[
          {
            name: "good and balanced diet.",
            population: 192,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "Neither good nor bad.",
            population: 46,
            color: "orange",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "unbalanced and malnourished",
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
      <PieChart
        data={[
          {
            name: "1 dose of vaccine",
            population: 10,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "2 doses of vaccine",
            population: 297,
            color: "orange",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "3 doses of vaccine",
            population: 80,
            color: "yellow",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "3+ doses of vaccine",
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
      <Text>Social events more than 3 days</Text>
      <PieChart
        data={[
          {
            name: "NO",
            population: 177,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "YES",
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
      <PieChart
        data={[
          {
            name: "NO",
            population: 182,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "YES",
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
      <PieChart
        data={[
          {
            name: "NO",
            population: 291,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "YES",
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
      <PieChart
        data={[
          {
            name: "NO",
            population: 116,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "YES",
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
      <PieChart
        data={[
          {
            name: "NO",
            population: 304,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "YES",
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
      <PieChart
        data={[
          {
            name: "NO",
            population: 307,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "YES",
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
          snapshot._document.data.value.mapValue.fields?.ResultScore.mapValue
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
          <Text style={styles.textstyle}>Score {score}</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View>
            {/*Example of Bezier LineChart*/}
            <MyBezierLineChart />
            {/*Example of LineChart*/}
            <MyLineChart />
            {/*Example of Bar Chart*/}
            <MyBarChart />
            {/*Example of StackedBar Chart*/}
            <MyStackedBarChart />
            {/*Example of Pie Chart*/}
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
    fontSize: 24,
    marginRight: 10,
    color: "gray",
  },
});
