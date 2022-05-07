import { StyleSheet, Text, View } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    padding: 10,
    borderRadius: 16,
    paddingHorizontal: 10,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1A759F",
  },
  question: {
    fontSize: 28,
  },
  option: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
  optionTouchable: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#34A0A4",
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  parent: {
    height: "100%",
  },
  questionTitle: {
    fontSize: 17,
  },
  checkOption: {
    flexDirection: "row",
    textAlign: "center",
    flex: 1,
  },
  thanksView: {
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },

  thanksTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 200,
  },
  retakeSurveyTouchable: {
    padding: 10,
    marginTop: 20,
    color: "#34A0A4",
    borderRadius: 30,
  },
});
