import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    inputContainer: {
      width: "80%",
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      width: "80%",
      backgroundColor: "white",
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
      margin: 15,
    },
    inputError: {
      width: "80%",
      backgroundColor: "white",
      borderColor: "red",
      borderStyle: "solid",
      borderWidth:1,
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
      margin: 15,
    },
    buttonContainer: {
      width: "60%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 40,
    },
    signUpButton: {
      backgroundColor: "#56D6FF",
      width: 200,
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
    },
    loginButton: {
      backgroundColor: "#56D6FF",
      width: 100,
      padding: 10,
      borderRadius: 10,
      alignItems: "center",
    },
    buttonOutline: {
      backgroundColor: "white",
      marginTop: 5,
      borderColor: "#56D6FF",
      borderWidth: 2,
    },
    buttonText: {
      color: "white",
      fontWeight: "700",
      fontSize: 16,
    },
    buttonOutlineText: {
      color: "#0782F9",
      fontWeight: "700",
      fontSize: 12,
    },
    loginText: {
      fontSize: 12,
      marginTop: 8,
      marginBottom: 5,
    },
    logo: {
      width: 200,
      height: 200, 
    },
  });
  