import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from 'react'
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
import { initializeApp } from 'firebase/app';
import {
  getAuth,
} from 'firebase/auth';
import { firebaseConfig } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [errorMessage,setErrorMessage] = useState(false);


  const navigation = useNavigation();
  initializeApp(firebaseConfig);

  const auth = getAuth();


  const handleLogin = async () => {
   
   try {
        if (email !== '' && password !== '') {
          await signInWithEmailAndPassword(auth,email, password)
          .then((userCredential) => {
            setErrorMessage(false);
            const user = userCredential.user;
            const accessToken = user?.accessToken;
            if(accessToken && accessToken != "")  {
              navigation.replace("Home");  
            }
         
          })
          .catch((error) => {
            const errorMessage = error.message;
            setErrorMessage(true);
          });
         
        }
        else {
          setErrorMessage(true)
        }
      } catch (error) {
        throw error;
     
    };
  
   
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
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      {errorMessage && <Text style={{marginTop:20, color:"red"}}>Please provide correct credentials</Text>}

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


