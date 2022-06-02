import { StyleSheet, Text, View } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },

  userInfo: {
    paddingHorizontal: 30,
    marginBottom: 20,
    display: "flex",
  },
  nameTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  usernameCaption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
    height: 40,
    alignItems: "center",
  },
  menuWrapper: {
    marginTop: 7,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  emailPadding: {
    paddingLeft: 10,
  },
});
