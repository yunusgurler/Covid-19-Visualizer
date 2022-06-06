import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import * as Location from "expo-location";
import LocationContext from "../../store/LocationHandler";

const GeolocationHandler = (props) => {
  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
  const locationCtx = useContext(LocationContext);

  useEffect(() => {
    CheckIfLocationEnabled();
    GetCurrentLocation();
  }, []);

  const CheckIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      Alert.alert(
        "Location Service not enabled",
        "Please enable your location services to continue",
        [{ text: "OK" }],
        { cancelable: false }
      );
    } else {
      setLocationServiceEnabled(enabled);
    }
  };

  const GetCurrentLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Allow the app to use location service.",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }

    let { coords } = await Location.getCurrentPositionAsync({});

    if (coords) {
      const { latitude, longitude } = coords;

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      for (let item of response) {
        let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
        locationCtx.locationHandler(latitude, longitude, address);
        props.passData(latitude, longitude, address);
      }
    }
  };

  return <></>;
};

export default GeolocationHandler;

const styles = StyleSheet.create({});
