import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text} from "react-native";
import MapView, { Marker, Heatmap, PROVIDER_GOOGLE } from "react-native-maps";
import { getDatabase, ref, onValue } from "firebase/database";
import { MapScreen } from "./MapScreen"

const MarkerMapScreen = () => {
  const [mapRegion, setmapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const points = [
    { latitude: 49.986111, longitude: 20.061667, weight: 1 },
    { latitude: 50.193139, longitude: 20.288717, weight: 2 },
    { latitude: 49.740278, longitude: 19.588611, weight: 1 },
    { latitude: 50.061389, longitude: 19.938333, weight: 8 },
    { latitude: 50.174722, longitude: 20.986389, weight: 11 },
    { latitude: 50.064507, longitude: 19.920777, weight: 98 },
    { latitude: 49.3, longitude: 19.95, weight: 41 },
    { latitude: 49.833333, longitude: 19.940556, weight: 66 },
    { latitude: 49.477778, longitude: 20.03, weight: 9 },
    { latitude: 49.975, longitude: 19.828333, weight: 11 },
    { latitude: 50.357778, longitude: 20.0325, weight: 33 },
    { latitude: 50.0125, longitude: 20.988333, weight: 76 },
    { latitude: 50.067959, longitude: 19.91266, weight: 63 },
    { latitude: 49.418588, longitude: 20.323788, weight: 52 },
    { latitude: 49.62113, longitude: 20.710777, weight: 88 },
    { latitude: 50.039167, longitude: 19.220833, weight: 1 },
    { latitude: 49.970495, longitude: 19.837214, weight: 78 },
    { latitude: 49.701667, longitude: 20.425556, weight: 1 },
    { latitude: 50.078429, longitude: 20.050861, weight: 1 },
    { latitude: 49.895, longitude: 21.054167, weight: 1 },
    { latitude: 50.27722, longitude: 19.569658, weight: 65 },
    { latitude: 49.968889, longitude: 20.606389, weight: 1 },
    { latitude: 49.51232, longitude: 19.63755, weight: 1 },
    { latitude: 50.018077, longitude: 20.989849, weight: 35 },
    { latitude: 50.081698, longitude: 19.895629, weight: 22 },
    { latitude: 49.968889, longitude: 20.43, weight: 54 },
    { latitude: 50.279167, longitude: 19.559722, weight: 1 },
    { latitude: 50.067947, longitude: 19.912865, weight: 69 },
    { latitude: 49.654444, longitude: 21.159167, weight: 1 },
    { latitude: 50.099606, longitude: 20.016707, weight: 80 },
    { latitude: 50.357778, longitude: 20.0325, weight: 99 },
    { latitude: 49.296628, longitude: 19.959694, weight: 1 },
    { latitude: 50.019014, longitude: 21.002474, weight: 46 },
    { latitude: 50.056829, longitude: 19.926414, weight: 22 },
    { latitude: 49.616667, longitude: 20.7, weight: 1 },
    { latitude: 49.883333, longitude: 19.5, weight: 33 },
    { latitude: 50.054217, longitude: 19.943289, weight: 1 },
    { latitude: 50.133333, longitude: 19.4, weight: 100 },
  ];

  const [dbState, setDbState] = useState([]);
  const [isMarkerOpen, setMarkerOpen] = useState(false); 
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
        <Heatmap
                  points={points}
                  radius={80}
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
        {isMarkerOpen && (
                  dbState &&
                    dbState.map((place, i) => (
                      <Marker
                        key={i}
                        title={"Death: " + place.Confirmed}
                        coordinate={place.Coordinate}
                      />
                    ))
        ) }
        
          <TouchableOpacity
          onPress={() => setMarkerOpen(true)}
          style={styles.loginButton}
        >
          <Text style={styles.buttonText}>Marker Map</Text>
        </TouchableOpacity>
      </MapView>

      
    </View>
  );
};

export default MarkerMapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#56D6FF',
    width: 100,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
});
