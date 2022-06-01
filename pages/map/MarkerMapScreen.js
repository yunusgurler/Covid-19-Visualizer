import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text} from "react-native";
import MapView, { Marker, Heatmap, PROVIDER_GOOGLE, Callout } from "react-native-maps";
import { getDatabase, ref, onValue } from "firebase/database";
import MapScreen from "./MapScreen";
import { Ionicons } from "@expo/vector-icons";

const MarkerMapScreen = () => {
  const [mapRegion, setmapRegion] = useState({
    latitude:13.406,
    longitude:123.3753,
    latitudeDelta:0.005,
    longitudeDelta:0.005
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
      {/* <MapView
      style={styles.map}
      initialRegion={{
        latitude:13.406,
        longitude:123.3753,
        latitudeDelta:0.005,
        longitudeDelta:0.005
      }}
      >
        <Marker 
        coordinate={{ latitude: 13.406, longitude:123.3753 }}
        // title="test"
        // description="test description"
        >
          <Callout>
            <Text>This is a Callout</Text>
          </Callout>
          <Circle 
          center={{ latitude: 13.406, longitude: 123.3753}} 
          radius = {100}
          />
        </Marker>
      </MapView> */}


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
          <TouchableOpacity
            onPress={() => setMarkerOpen(!isMarkerOpen)}
            style={styles.loginButton}
          >
          </TouchableOpacity>
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
    backgroundColor: ("#56D6FF", 0.70),
    width: 80,
    height:80,
    padding: 15,
    borderRadius: 65,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "117%",
    marginLeft: 25,
    position: "absolute",
  },
});
