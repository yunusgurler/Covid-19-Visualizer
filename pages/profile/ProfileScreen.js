import { StatusBar } from "expo-status-bar";
import { View, Image } from "react-native";
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
import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import GeolocationHandler from "../home/GeolocationHandler";

export default function ProfileScreen() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [loggedInUserEmail, setLoggedInUserEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = getAuth();
  const navigation = useNavigation();
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState("");

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

  const passData = (lat, long, address) => {
    console.log("address ", address);
    if (address != "" && address != null) {
      setDisplayCurrentAddress(address);
    }
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => {
        console.log("Sign out unsuccessful");
      });
  };

  return (
    <View style={styles.container}>
      <GeolocationHandler passData={passData} />
      <View
        style={{
          backgroundColor: "#c6f0fe",
          width: "100%",
          height: 200,
          alignItems: "center",
        }}
      >
        <View>
          <AwesomeIcon
            name="user-circle"
            color="#191919"
            size={100}
            style={{
              width: 100,
              height: 100,
              marginTop: 85,
              marginLeft: 20,
              alignItems: "center",
              borderRadius: 50,
            }}
          />
        </View>
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
                {loggedInUser.charAt(0).toUpperCase() + loggedInUser.slice(1)}
              </Title>
              <Caption style={styles.usernameCaption}>@{loggedInUser}</Caption>
            </View>
          </View>
        </View>

        <View style={styles.userInfo}>
          <View style={styles.row}>
            <Icon name="map-marker-radius" color="black" size={20} />

            <Text style={styles.emailPadding}>
              {displayCurrentAddress != undefined && displayCurrentAddress}
            </Text>
          </View>

          <View style={styles.row}>
            <Icon name="email" color="black" size={20} />
            <Text style={styles.emailPadding}>{loggedInUserEmail}</Text>
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
