import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    
        container: {
        flex: 1,  
      },
        buttonContainer: {   
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
       
      },
      loginButton: {
        backgroundColor: '#56D6FF',
        width: '75%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
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
        fontSize: 12,
      },
      title: {
        position: 'absolute',
        marginBottom: 300,
        fontSize: 16,
        fontFamily: 'Roboto',
        color:'blue',
      },
      logo: {
        position: 'absolute',
        width: 200,
        height: 200, 
        marginBottom: 400,
        bottom:'15%',
      }
})