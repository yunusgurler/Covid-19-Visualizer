import { useNavigation } from '@react-navigation/core'
import initializeApp from '@react-native-firebase/app';

//import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
//import auth from '@react-native-firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyBZanLY7rgEXO4CT6nqB5_DbK9A_YTy6uc",
  authDomain: "test-53c1e.firebaseapp.com",
  databaseURL: "https://test-53c1e-default-rtdb.firebaseio.com",
  projectId: "test-53c1e",
  storageBucket: "test-53c1e.appspot.com",
  messagingSenderId: "299737923965",
  appId: "1:299737923965:web:7df5121174c9888a234c14"
};

// Initialize Firebase


const LoginScreen = () => {
  //const app = initializeApp(firebaseConfig)
  const navigation = useNavigation()
  
  //merkay mey auth için denedim çalışmadı, sen çalışırken silebilirsin commentleri
  // const [initializing, setInitializing] = useState(true)
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

 
  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }


  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // if (initializing) return null;

  // if (!user) {
  //   return (
  //     <View>
  //       <Text>Login</Text>
  //     </View>
  //   );
  // }
  // const handleSignUp = () => {
  // auth()
  // .createUserWithEmailAndPassword('test@example.com', 'ss')
  // .then(() => {
  //   console.log('User account created & signed in!');
  //   navigation.replace("SignUp")
  // })
  // .catch(error => {
  //   if (error.code === 'auth/email-already-in-use') {
  //     console.log('That email address is already in use!');
  //   }

  //   if (error.code === 'auth/invalid-email') {
  //     console.log('That email address is invalid!');
  //   }

  //   console.error(error);
  // });

  // }
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       navigation.replace("Home")
  //     }
  //   })

  //   return unsubscribe
  // }, [])

 

  // const handleLogin = () => {
  //   auth
  //     .signInWithEmailAndPassword(auth, email, password)
  //     .then(userCredentials => {
  //       const user = userCredentials.user;
  //       console.log('Logged in with:', user.email);
  //     })
  //     .catch(error => alert(error.message))
  // }



    const handleSignUp = () => {
      //signup butonu signup ekranına götürüyo
      navigation.replace("SignUp")
    }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
     

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
        <TouchableOpacity
          // onPress={handleLogin}
          style={styles.loginButton}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.signUpButton, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  loginButton: {
    backgroundColor: '#50BCFF',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  signUpButton: {
    backgroundColor: '#50BCFF',
    width: '40%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#50BCFF',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 10,
  },
})