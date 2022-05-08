import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { styles } from "./SignUpScreenStyle";
//import "firebase/auth";

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.replace("Login");
  };

  const handleSignUp = () => {
    navigation.replace("Home");
  };

  return (
    <View style={styles.container} behavior="padding">
      <Image 
      style={styles.logo} 
      source={require("../../assets/logo.png")}
      />
      <View style={styles.inputContainer}>
      
        <TextInput placeholder="Name" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
      
        <TouchableOpacity onPress={handleSignUp} style={styles.signUpButton}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.loginText}>Already have an account?</Text>
        </View>
        <TouchableOpacity
          onPress={handleLogin}
          style={[styles.loginButton, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

