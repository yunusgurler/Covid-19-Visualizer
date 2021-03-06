import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./pages/login/LoginScreen";
import SignUpScreen from "./pages/signup/SignUpScreen";
import SurveyScreen from "./pages/survey/SurveyScreen";
import ProfileScreen from "./pages/profile/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from "./pages/splash/SplashScreen";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import MarkerMapScreen from "./pages/map/MarkerMapScreen";
import NewsScreen from "./pages/home/NewsScreen";
import { LocationContextProvider } from "./store/LocationHandler";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home({ route, navigation }) {
  const { user } = route.params;

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
        initialParams={{ user }}
        name="Home"
        component={NewsScreen}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="map-marker" size={size} color={color} />
          ),
        }}
        initialParams={{ user }}
        name="Map"
        component={MarkerMapScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="form" size={size} color={color} />
          ),
        }}
        name="Survey"
        initialParams={{ user }}
        component={SurveyScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
        initialParams={{ user }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <LocationContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Splash"
            component={SplashScreen}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="SignUp"
            component={SignUpScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </LocationContextProvider>
  );
}
if (process.env.NODE_ENV === "debug") {
  setDebugLevel(1);
}
