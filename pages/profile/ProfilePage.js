import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, SafeAreaView, View } from "react-native";
import { styles } from "./ProfilePageStyle";
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

export default function ProfilePage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.border}>
        <View style={styles.userInfo}>
          <View style={{ flexDirection: "row", marginTop: 14 }}>
            <Avatar.Image
              source={{
                uri: "https://avatars.githubusercontent.com/u/63549745?v=4",
              }}
              size={75}
            />

            <View style={{ marginLeft: 16 }}>
              <Title
                style={[
                  styles.nameTitle,
                  {
                    marginTop: 15,
                    marginBottom: 5,
                  },
                ]}
              >
                Merve Baykara
              </Title>
              <Caption style={styles.usernameCaption}>@mervegb</Caption>
            </View>
            <View></View>
            <View>
              <TouchableRipple onPress={() => {}}>
                <AwesomeIcon
                  style={{
                    height: "40px",
                    marginTop: "15px",
                    marginLeft: "15px",
                  }}
                  name="edit"
                  size={30}
                  color="#56d6ff"
                />
              </TouchableRipple>
            </View>
          </View>
        </View>

        <View style={styles.userInfo}>
          <View style={styles.row}>
            <Icon name="map-marker-radius" color="#56d6ff" size={20} />
            <Text style={{ color: "#777777", marginLeft: 10 }}>
              Istanbul,Turkey
            </Text>
          </View>

          <View style={styles.row}>
            <Icon name="phone" color="#56d6ff" size={20} />
            <Text style={{ color: "#777777", marginLeft: 10 }}>+90 xxxxxx</Text>
          </View>

          <View style={styles.row}>
            <Icon name="email" color="#56d6ff" size={20} />
            <Text style={{ color: "#777777", marginLeft: 10 }}>
              mero@gmail.com
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#c6f0fe",
            height: "50px",
            marginBottom: "10px",
          }}
        ></View>

        <View>
          <View style={styles.menuWrapper}>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <AwesomeIcon name="address-book" color="#56d6ff" size={20} />
                <Text style={styles.menuItemText}>My Address</Text>
              </View>
            </TouchableRipple>
          </View>

          <View style={styles.menuWrapper}>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="form-select" color="#56d6ff" size={20} />
                <Text style={styles.menuItemText}>Survey</Text>
              </View>
            </TouchableRipple>
          </View>

          <View style={styles.menuWrapper}>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <AwesomeIcon name="heart" color="#56d6ff" size={20} />
                <Text style={styles.menuItemText}>Health Status</Text>
              </View>
            </TouchableRipple>
          </View>

          <View style={styles.menuWrapper}>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="help-circle-outline" color="#56d6ff" size={20} />
                <Text style={styles.menuItemText}>Help</Text>
              </View>
            </TouchableRipple>
          </View>

          <View style={styles.menuWrapper}>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <MaterialIcon name="notifications" color="#56d6ff" size={20} />
                <Text style={styles.menuItemText}>Notifications</Text>
              </View>
            </TouchableRipple>
          </View>

          <View style={styles.menuWrapper}>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="logout" color="#56d6ff" size={20} />
                <Text style={styles.menuItemText}>Logout</Text>
              </View>
            </TouchableRipple>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
