import { Platform, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker, Heatmap, PROVIDER_GOOGLE } from "react-native-maps";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const MapScreen = ({ loggedInUser }) => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 41.0082,
    longitude: 28.9784,
    latitudeDelta: 1,
    longitudeDelta: 1,
  });
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  let [points, setPoints] = useState([
    { latitude: 41.0456, longitude: 28.8247, weight: 1 },
    { latitude: 41.0956, longitude: 28.9247, weight: 2 },
    { latitude: 41.1156, longitude: 28.8247, weight: 5 },
    { latitude: 41.1256, longitude: 28.9247, weight: 1 },
    { latitude: 41.1356, longitude: 28.9547, weight: 2 },
    { latitude: 41.1556, longitude: 29.247, weight: 3 },
    { latitude: 40.9994, longitude: 29.093, weight: 4 },
    { latitude: 41.028, longitude: 28.8247, weight: 2 },
    { latitude: 41.0956, longitude: 28.6818, weight: 1 },
    { latitude: 41.0206, longitude: 28.6025, weight: 1 },
    { latitude: 41.006, longitude: 28.546, weight: 1 },
    { latitude: 40.9905, longitude: 28.7876, weight: 2 },
    { latitude: 41.0571, longitude: 28.756, weight: 6 },
    { latitude: 40.98433, longitude: 28.8731, weight: 4 },
    { latitude: 41.002, longitude: 28.846, weight: 3 },
    { latitude: 41.0056, longitude: 28.8736, weight: 2 },
    { latitude: 41.041, longitude: 28.839, weight: 2 },
    { latitude: 41.06533, longitude: 28.908, weight: 6 },
    { latitude: 41.014, longitude: 28.9462, weight: 4 },
    { latitude: 41.0174, longitude: 28.9616, weight: 3 },
    { latitude: 41.0067, longitude: 28.9715, weight: 2 },
    { latitude: 41.0275, longitude: 28.9496, weight: 3 },
    { latitude: 41.025, longitude: 28.973, weight: 2 },
    { latitude: 41.041, longitude: 28.639, weight: 2 },
    { latitude: 41.06533, longitude: 28.308, weight: 6 },
    { latitude: 41.014, longitude: 28.4462, weight: 4 },
    { latitude: 41.0174, longitude: 28.4616, weight: 3 },
    { latitude: 41.0067, longitude: 28.5715, weight: 2 },
    { latitude: 41.058, longitude: 29.006, weight: 3 },
    { latitude: 41.0206, longitude: 29.029, weight: 2 },
    { latitude: 41.141, longitude: 28.839, weight: 2 },
    { latitude: 41.16533, longitude: 28.408, weight: 6 },
    { latitude: 41.214, longitude: 28.4762, weight: 4 },
    { latitude: 41.1174, longitude: 28.4116, weight: 3 },
    { latitude: 41.1067, longitude: 28.5315, weight: 2 },
  ]);

  useEffect(() => {
    const firestore = getFirestore();
    const surveyCollection = doc(firestore, "Survey DB", loggedInUser?.uid);

    getDoc(surveyCollection).then((snapshot) => {
      if (snapshot?._document !== undefined && snapshot?._document !== null) {
        let data = snapshot?._document?.data?.value?.mapValue.fields;

        let resultScore =
          data?.ResultScore?.mapValue?.fields?.Score?.stringValue;

        if (resultScore > 60) {
          let latitudeArray = Object.values(data.latitude)[0]?.values;
          let longitudeArray = Object.values(data.longitude)[0]?.values;

          if (latitudeArray) {
            latitudeArray &&
              latitudeArray.map((a) => setLatitude(a.doubleValue));
          }
          if (longitudeArray) {
            longitudeArray &&
              longitudeArray.map((a) => setLongitude(a.doubleValue));
          }
        } else {
          setLatitude(0);
          setLatitude(0);
        }
      }
    });
  }, []);

  useEffect(() => {
    if (latitude > 0 && longitude > 0) {
      let currentLocation = {
        latitude: latitude,
        longitude: longitude,
        weight: 3,
      };
      setPoints([...points, currentLocation]);
    }
  }, [latitude, longitude]);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={(map) => (map = map)}
        style={styles.map}
        initialRegion={mapRegion}
      >
        <Heatmap
          points={points}
          radius={40}
          opacity={1}
          gradient={{
            colors: ["#79BC6A", "#BBCF4C", "#EEC20B", "#F29305", "#E50000"],
            values: [0, 0.5, 0.5, 0.75, 1],
            startPoints:
              Platform.OS === "ios"
                ? [0.01, 0.04, 0.1, 0.45, 0.5]
                : [0.1, 0.25, 0.5, 0.75, 1],
            colorMapSize: 2000,
          }}
          onZoomRadiusChange={{
            zoom: [0, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17],
            radius: [
              10, 10, 15, 20, 30, 60, 80, 100, 120, 150, 180, 200, 250, 250,
            ],
          }}
          maxIntensity={1}
          gradientSmoothing={10}
          heatmapMode={"POINTS_WEIGHT"}
        ></Heatmap>
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,

    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
