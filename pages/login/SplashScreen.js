import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'

const SplashScreen = () => {
    const navigation = useNavigation()


    const passToLogin = () => {
        navigation.replace("Login")
    }
        
    const passToSignup = () => {
        navigation.replace("SignUp")
    }
    
  return (
      <View style={styles.buttonContainer}>
    <TouchableOpacity
    onPress={passToLogin}
    style={styles.loginButton}
  >
    <Text style={styles.buttonText}>Login</Text>
  </TouchableOpacity>
  <TouchableOpacity
    onPress={passToSignup}
    style={[styles.signUpButton, styles.buttonOutline]}
  >
    <Text style={styles.buttonOutlineText}>Sign Up</Text>
  </TouchableOpacity>
  </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    buttonContainer: {
        
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      },
      loginButton: {
        backgroundColor: '#56D6FF',
        width: '75%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      signUpButton: {
        backgroundColor: '#56D6FF',
        width: '75%',
        padding: 15,
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