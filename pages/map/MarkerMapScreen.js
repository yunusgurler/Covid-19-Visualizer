import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import MapView, { Marker, Heatmap, PROVIDER_GOOGLE } from "react-native-maps";
import { getDatabase, ref, onValue } from "firebase/database";
import MapScreen from "./MapScreen";

const MarkerMapScreen = () => {
  const [mapRegion, setmapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [dbState, setDbState] = useState([]);
  const [isMarkerOpen, setMarkerOpen] = useState(false);
  const db = getDatabase();

  useEffect(() => {
    const covidRef = ref(db);
    onValue(covidRef, (snapshot) => {
      const data = snapshot.val();
      setDbState(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      {!isMarkerOpen ? (
        <MapScreen />
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
        </MapView>
      )}
      <TouchableOpacity
        onPress={() => setMarkerOpen(true)}
        style={styles.loginButton}
      >
        <Text style={styles.buttonText}>Marker Map</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MarkerMapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#56D6FF",
    width: 100,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
});
