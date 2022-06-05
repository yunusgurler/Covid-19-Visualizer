import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { getDatabase, ref, onValue } from "firebase/database";
import MapScreen from "./MapScreen";
import { Ionicons } from "@expo/vector-icons";
import GeolocationHandler from "../home/GeolocationHandler";
import { doc, getFirestore, updateDoc } from "firebase/firestore";

const MarkerMapScreen = ({ route }) => {
  const [mapRegion, setmapRegion] = useState({
    latitude: 41.0082,
    longitude: 28.9784,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });

  const [dbState, setDbState] = useState([]);
  const [isMarkerOpen, setMarkerOpen] = useState(false);
  const db = getDatabase();
  const [loggedInUser, setLoggedInUser] = useState(route.params.user);

  const passData = (lat, long, address) => {
    if (lat > 0 && long > 0) {
      const firestore = getFirestore();
      const surveyCollection = doc(firestore, "Survey DB", loggedInUser?.uid);
      updateDoc(surveyCollection, {
        latitude: [lat],
        longitude: [long],
      });
    }
  };

  useEffect(() => {
    const covidRef = ref(db);
    onValue(covidRef, (snapshot) => {
      const data = snapshot.val();
      setDbState(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <GeolocationHandler passData={passData} />
      {!isMarkerOpen ? (
        <MapScreen loggedInUser={loggedInUser} />
      ) : (
        <MapView
          style={{ alignSelf: "stretch", height: "100%" }}
          region={mapRegion}
        >
          {dbState &&
            dbState.map((place, i) => (
              <Marker
                key={i}
                title={"Death: " + place.Confirmed}
                coordinate={place.Coordinate}
              />
            ))}
          <TouchableOpacity
            onPress={() => setMarkerOpen(!isMarkerOpen)}
            style={styles.loginButton}
          ></TouchableOpacity>
        </MapView>
      )}
      <TouchableOpacity
        onPress={() => setMarkerOpen(!isMarkerOpen)}
        style={styles.loginButton}
      >
        <Ionicons name="map" size={48} color="#60C1E5" />
      </TouchableOpacity>
    </View>
  );
};

export default MarkerMapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  loginButton: {
    backgroundColor: ("#56D6FF", 0.7),
    width: 80,
    height: 80,
    padding: 15,
    borderRadius: 65,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "117%",
    marginLeft: 25,
    position: "absolute",
  },
});
