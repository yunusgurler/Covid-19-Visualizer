import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import mapstaticpoints from "./MapPoints";

const MarkerMapScreen = () => {
  const [mapRegion, setmapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={styles.container}>
      <MapView
        style={{ alignSelf: "stretch", height: "100%" }}
        region={{
          latitude: 40.758927,
          longitude: -73.984981,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {/*  <Marker coordinate={mapRegion} title="Marker" /> */}
        {/*  {mapstaticpoints &&
            mapstaticpoints.map((place, i) => (
              <Marker key={i} title="Marker" coordinate={mapRegion} />
            ))} */}
        {mapstaticpoints &&
          mapstaticpoints.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: 40.758927,
                longitude: -73.984981,
              }}
              title={marker.title}
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
