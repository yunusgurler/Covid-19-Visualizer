import { Text, View, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { styles } from './SplashScreenStyle'

const SplashScreen = () => {
    const navigation = useNavigation()


    const passToLogin = () => {
        navigation.replace("Login")
    }
        
    const passToSignup = () => {
        navigation.replace("SignUp")
    }
    
  return (
    
    <View style={styles.container}>
      
        
      <View style={styles.buttonContainer}>
      <Image 
      style={styles.logo} 
      source={require("../../assets/logotext.png")}
      />
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
  
  </View>
  
  )
}

export default SplashScreen

