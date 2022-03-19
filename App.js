import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartPage from './pages/start/StartPage';




export default function App() {
  return (
    <View >
      <StartPage/>
      <Text>asdda</Text>
      <StatusBar styles ="auto"/>
    </View>
  );
}