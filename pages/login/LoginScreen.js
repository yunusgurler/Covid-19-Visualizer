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
import {styles} from "./LoginScreenStyle";

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.replace("Home");
  };

  const passToSignup = () => {
    navigation.replace("SignUp");
  };

  return (
    <View style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
      <Image 
      style={styles.logo} 
      source={require("../../assets/logo.png")}
      />
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
    </View>
  );
};

export default LoginScreen;


