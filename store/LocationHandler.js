import React, { useState } from "react";

const LocationContext = React.createContext({
  latitude: 0,
  longitude: 0,
  address: "",
  locationHandler: (lat, long, address) => {},
});

export const LocationContextProvider = (props) => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [address, setAddress] = useState("");

  const locationHandler = (lat, long, address) => {
    setLongitude(long);
    setLatitude(lat);
    setAddress(address);
  };

  const locationValue = {
    latitude: latitude,
    longitude: longitude,
    address: address,
    locationHandler: locationHandler,
  };

  return (
    <LocationContext.Provider value={locationValue}>
      {props.children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
