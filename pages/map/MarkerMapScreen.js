import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MarkerMapScreen = () => {
  const [mapRegion, setmapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  
 const mapstaticpoints = [
    {
      key: 1,
      title: "test1",
      coordinate: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    },
    {
      key: 2,
      title: "test2",
      coordinate: {
        latitude: 40.730610,
        longitude: -73.935242,        
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    },
  ];
  
  return (
    <View style={styles.container}>
      <MapView
      style={{ alignSelf: "stretch", height: "100%" }}
        region={mapRegion}>
       {mapstaticpoints.map((place, i) => (
          <Marker
            key={place.key}
            title={place.title}
            coordinate={place.coordinate}
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
