import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const HosScreen = ({navigation}) => {};
export default HosScreen;

/*import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Geolocation from '@react-native-community/geolocation'; // Import Geolocation library

const NearestHospitalScreen = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearestHospitals, setNearestHospitals] = useState([]);

  useEffect(() => {
    // Fetch user's current location
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setUserLocation({latitude, longitude});
        // Call function to find nearest hospitals
        findNearestHospitals(latitude, longitude);
      },
      error => {
        console.log('Error getting user location:', error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  const findNearestHospitals = async (latitude, longitude) => {
    // Call API or service to find nearest hospitals based on latitude and longitude
    // Update nearestHospitals state with the fetched data
    const hospitals = await fetchNearestHospitals(latitude, longitude);
    setNearestHospitals(hospitals);
  };

  const fetchNearestHospitals = async (latitude, longitude) => {
    // Implement logic to fetch nearest hospitals from API or service
    // You can use libraries like axios to make HTTP requests
    // Example: const response = await axios.get(`API_ENDPOINT?lat=${latitude}&lon=${longitude}&type=hospital`);
    // Parse the response and return the list of hospitals
    return []; // Dummy implementation
  };

  const handleHospitalPress = hospital => {
    // Implement navigation to hospital details screen
    // You can pass the selected hospital data as navigation params
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nearest Hospitals</Text>
      {nearestHospitals.map((hospital, index) => (
        <TouchableOpacity
          key={index}
          style={styles.hospitalItem}
          onPress={() => handleHospitalPress(hospital)}>
          <Text>{hospital.name}</Text>
          <Text>{hospital.contactNumber}</Text>
          <Text>{hospital.distance} km</Text>
    
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  hospitalItem: {
    backgroundColor: '#ECECEC',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default NearestHospitalScreen;*/
