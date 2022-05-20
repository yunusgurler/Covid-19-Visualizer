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
        width: 200,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
      },
      signUpButton: {
        backgroundColor: '#56D6FF',
        width: 200,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
      },
      buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#56D6FF',
        borderWidth: 2,
        marginTop: 10,
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
        marginBottom: 500,
        top:'15%',
      }
})