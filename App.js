import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProfilePage from "./pages/profile/ProfilePage";
import StartPage from "./pages/start/StartPage";

export default function App() {
  return (
    <View>
      <ProfilePage />
      <StatusBar styles="auto" />
    </View>
  );
}
