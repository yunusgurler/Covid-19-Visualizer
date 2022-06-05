import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

const GeolocationHandler = (props) => {
  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(0);
  const [displayCurrentLongitude, setDisplayCurrentLongitude] = useState(0);

  useEffect(() => {
    CheckIfLocationEnabled();
    GetCurrentLocation(displayCurrentAddress);
    props.passData(displayCurrentAddress, displayCurrentLongitude);
  }, [displayCurrentAddress, displayCurrentLongitude]);

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

    let { coords } = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
      maximumAge: 10000,
    });

    if (coords) {
      console.log("COORDS ", coords);
      const { latitude, longitude } = coords;
      setDisplayCurrentAddress(latitude);
      setDisplayCurrentLongitude(longitude);

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      for (let item of response) {
        let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
      }
    }
  };

  return <></>;
};

export default GeolocationHandler;

const styles = StyleSheet.create({});
