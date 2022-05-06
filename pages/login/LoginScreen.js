import { useNavigation } from "@react-navigation/core";

//import React, { useEffect, useState } from 'react'
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.replace("Home");
  };

  const passToSignup = () => {
    navigation.replace("SignUp");
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {/* <Image source={require('logo.png')} /> */}

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          //value={email}
          //onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          //value={password}
          //onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.loginText}>Not have an account?</Text>
        <TouchableOpacity
          onPress={passToSignup}
          style={[styles.signUpButton, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  loginButton: {
    backgroundColor: "#56D6FF",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  signUpButton: {
    backgroundColor: "#56D6FF",
    width: "40%",
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
    fontSize: 10,
  },
  loginText: {
    fontSize: 12,
    marginTop: 8,
    marginBottom: 5,
  },
});
