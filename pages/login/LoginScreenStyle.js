import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
  } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    inputContainer: {
      width: "100%",
      alignItems: "center",
    },
    input: {
      backgroundColor: "white",
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
      width: "60%",
    },
    buttonContainer: {
      width: "60%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 40,
    },
    loginButton: {
      backgroundColor: "#56D6FF",
      width: 200,
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
    },
    signUpButton: {
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
    }
  });