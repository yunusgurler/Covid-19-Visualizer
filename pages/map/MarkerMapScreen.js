import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { getDatabase, ref, onValue } from "firebase/database";

const MarkerMapScreen = () => {
  const [mapRegion, setmapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [dbState, setDbState] = useState([]);

  const db = getDatabase();

  useEffect(() => {
    const covidRef = ref(db);
    onValue(covidRef, (snapshot) => {
      const data = snapshot.val();
      data.map((item) => console.log(item.Confirmed));
      setDbState(data);
    });
  }, []);

  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default MarkerMapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
