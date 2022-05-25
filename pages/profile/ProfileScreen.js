import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View, Image, TextInput } from "react-native";
import { styles } from "./ProfileScreenStyle";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function ProfileScreen() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [loggedInUserEmail, setLoggedInUserEmail] = useState("");

  const auth = getAuth();
  const navigation = useNavigation();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const regex = /([^@]+)/;
      if (user != "") {
        const username = user.email.match(regex)[0];
        setLoggedInUser(username);
        setLoggedInUserEmail(user.email);
      }
    }
  });

  const handleLogout = () => {
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#EEDFDE",
          width: "100%",
          height: 200,
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: "" }}
          style={{ width: 100, height: 100, marginTop: 120, borderRadius: 50 }}
        />
      </View>

      <View>
        <View style={styles.userInfo}>
          <View style={{ flexDirection: "column", marginTop: 14 }}>
            <View style={{ marginLeft: 16, alignItems: "center" }}>
              <Title
                style={[
                  styles.nameTitle,
                  {
                    marginTop: 15,
                    marginBottom: 5,
                  },
                ]}
              >
                {loggedInUser}
              </Title>
              <Caption style={styles.usernameCaption}>@{loggedInUser}</Caption>
            </View>
          </View>
        </View>

        <View style={styles.userInfo}>
          <View style={styles.row}>
            <Icon name="map-marker-radius" color="black" size={20} />
            <TextInput
              style={{ color: "#777777", padding: 10 }}
              placeholder="Istanbul/Turkey"
            />
          </View>

          <View style={styles.row}>
            <Icon name="phone" color="black" size={20} />
            <TextInput
              style={{ color: "#777777", padding: 10 }}
              placeholder="+90 xxxxxx"
            />
          </View>

          <View style={styles.row}>
            <Icon name="email" color="black" size={20} />
            <TextInput
              style={{ color: "#777777", padding: 10 }}
              placeholder={loggedInUserEmail}
            />
          </View>
        </View>

        <View>
          <View style={styles.menuWrapper}>
            <TouchableRipple onPress={() => navigation.navigate("Survey")}>
              <View style={styles.menuItem}>
                <AwesomeIcon name="heart" color="black" size={20} />
                <Text style={styles.menuItemText}>Health Status</Text>
              </View>
            </TouchableRipple>
          </View>

          <View style={styles.menuWrapper}>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="help-circle-outline" color="black" size={20} />
                <Text style={styles.menuItemText}>Help</Text>
              </View>
            </TouchableRipple>
          </View>

          <View style={styles.menuWrapper}>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <MaterialIcon name="notifications" color="black" size={20} />
                <Text style={styles.menuItemText}>Notifications</Text>
              </View>
            </TouchableRipple>
          </View>

          <View style={styles.menuWrapper}>
            <TouchableRipple onPress={handleLogout}>
              <View style={styles.menuItem}>
                <Icon name="logout" color="black" size={20} />
                <Text style={styles.menuItemText}>Logout</Text>
              </View>
            </TouchableRipple>
          </View>
        </View>
      </View>
    </View>
  );
}
