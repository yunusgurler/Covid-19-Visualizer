import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles}  from './StartPageStyle';



export default function StartPage() {
  return (
    <View style={styles.container}>
      <Text>BERKAY admdır</Text>
      <StatusBar style="auto"/>
    </View>
  );
}