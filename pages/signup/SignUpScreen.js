import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { styles } from "./SignUpScreenStyle";
import { firebaseConfig } from "../../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const HomeScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const auth = getAuth();

  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.replace("Login");
  };

  const handleSignUp = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setErrorMessage(false);
        setIsFocused(true);
        const user = userCredential.user;
        const accessToken = user?.accessToken;
        if (accessToken && accessToken != "") {
          navigation.replace("Home", { user });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(true);
        setIsFocused(false);
      });
  };

  return (
    <View style={styles.container} behavior="padding">
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          placeholderTextColor= {'gray'}
          value={name}
          onFocus={() => setIsFocused(true)}
          onChangeText={(text) => setName(text)}
          style={[
            styles.input,
            !errorMessage || isFocused ? styles.input : styles.inputError,
          ]}
        />

        <TextInput
          placeholder="Email"
          placeholderTextColor={'gray'}
          value={email}
          onFocus={() => setIsFocused(true)}
          onChangeText={(text) => setEmail(text)}
          style={[
            styles.input,
            !errorMessage || isFocused ? styles.input : styles.inputError,
          ]}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor={'gray'}
          value={password}
          onFocus={() => setIsFocused(true)}
          onChangeText={(text) => setPassword(text)}
          style={[
            styles.input,
            !errorMessage || isFocused ? styles.input : styles.inputError,
          ]}
          secureTextEntry
        />

        {errorMessage && (
          <Text style={{ marginTop: 20, color: "red" }}>
            Please provide correct credentials
          </Text>
        )}
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
