import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const HosScreen = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [nearbyHospitals, setNearbyHospitals] = useState([]);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  // Function to get the current location
  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setCurrentLocation({latitude, longitude});
      },
      error => {
        console.log('Error getting location:', error);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  // Function to search for nearby hospitals
  const searchNearbyHospitals = () => {
    // Implement code to fetch nearby hospitals based on currentLocation
    // You can use Google Places API or a similar service for this purpose
    // Update nearbyHospitals state with the fetched data
  };

  return (
    <View style={styles.container}>
      {currentLocation && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
            title="You are here"
          />
          {/* Add markers for nearby hospitals */}
          {/* Example: */}
          {/* <Marker
            coordinate={{
              latitude: hospital.latitude,
              longitude: hospital.longitude,
            }}
            title={hospital.name}
            description={`Distance: ${hospital.distance} km`}
          /> */}
        </MapView>
      )}
      <Text style={styles.heading}>Nearby Hospitals</Text>
      {/* Display nearby hospitals list */}
      {/* Example: */}
      {/* <FlatList
        data={nearbyHospitals}
        renderItem={({ item }) => (
          <Text>{`${item.name} - Distance: ${item.distance} km`}</Text>
        )}
        keyExtractor={item => item.id.toString()}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '50%',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default HosScreen;
