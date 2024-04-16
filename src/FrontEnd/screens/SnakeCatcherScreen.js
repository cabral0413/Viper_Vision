/*import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const SnakeCatcherScreen = ({navigation}) => {};
export default SnakeCatcherScreen;*/

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const SnakeCatcherScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [allDistricts, setAllDistricts] = useState([
    'Colombo',
    'Gampaha',
    'Kalutara',
    'Kandy',
    'Matale',
    'Nuwara Eliya',
    'Galle',
    'Matara',
    'Hambantota',
    'Jaffna',
    'Kilinochchi',
    'Mannar',
    'Vavuniya',
    'Mullaitivu',
    'Batticaloa',
    'Ampara',
    'Trincomalee',
    'Kurunegala',
    'Puttalam',
    'Anuradhapura',
    'Polonnaruwa',
    'Badulla',
    'Moneragala',
    'Ratnapura',
    'Kegalle',
  ]);
  const [districts, setDistricts] = useState(allDistricts);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [snakeCatchers, setSnakeCatchers] = useState([]);

  // Mock data for snake catchers
  const allSnakeCatchers = [
    // Colombo
    {name: 'Kamal Perera', contact: '071 123 4567', district: 'Colombo'},
    {name: 'Sunil Silva', contact: '077 234 5678', district: 'Colombo'},
    {name: 'Nimal Fernando', contact: '070 345 6789', district: 'Colombo'},
    // Gampaha
    {name: 'Saman Jayawardena', contact: '072 456 7890', district: 'Gampaha'},
    {name: 'Kasun Bandara', contact: '078 567 8901', district: 'Gampaha'},
    {name: 'Rohan Rajapaksa', contact: '076 678 9012', district: 'Gampaha'},
    // Kalutara
    {name: 'Wimal Perera', contact: '075 789 0123', district: 'Kalutara'},
    {name: 'Udaya Ranasinghe', contact: '073 890 1234', district: 'Kalutara'},
    {
      name: 'Chaminda Senanayake',
      contact: '079 901 2345',
      district: 'Kalutara',
    },
    // Kandy
    {name: 'Gayan Senaratne', contact: '081 234 5678', district: 'Kandy'},
    {name: 'Nishantha Rajapakse', contact: '082 345 6789', district: 'Kandy'},
    {name: 'Nuwan Bandara', contact: '083 456 7890', district: 'Kandy'},
    // Matale
    {name: 'Sanjeewa Perera', contact: '066 789 0123', district: 'Matale'},
    {name: 'Dinesh Fernando', contact: '067 890 1234', district: 'Matale'},
    {name: 'Mahesh Gunawardena', contact: '068 901 2345', district: 'Matale'},
    // Nuwara Eliya
    {name: 'Chandana Silva', contact: '052 123 4567', district: 'Nuwara Eliya'},
    {
      name: 'Asanka Wijeratne',
      contact: '053 234 5678',
      district: 'Nuwara Eliya',
    },
    {
      name: 'Janaka Rathnayake',
      contact: '054 345 6789',
      district: 'Nuwara Eliya',
    },
    // Galle
    {name: 'Saman Kumara', contact: '091 234 5678', district: 'Galle'},
    {name: 'Sunil Jayaweera', contact: '092 345 6789', district: 'Galle'},
    {name: 'Asanka Bandara', contact: '093 456 7890', district: 'Galle'},
    // Matara
    {name: 'Nihal Perera', contact: '041 123 4567', district: 'Matara'},
    {name: 'Bandula Rajapaksa', contact: '042 234 5678', district: 'Matara'},
    {name: 'Kasun Perera', contact: '043 345 6789', district: 'Matara'},
    // Hambantota
    {name: 'Rohana Silva', contact: '047 123 4567', district: 'Hambantota'},
    {name: 'Sujeewa Perera', contact: '048 234 5678', district: 'Hambantota'},
    {
      name: 'Chamara Senarathne',
      contact: '049 345 6789',
      district: 'Hambantota',
    },
    // Jaffna
    {name: 'Suresh Kumar', contact: '021 123 4567', district: 'Jaffna'},
    {name: 'Rajesh Gunaratne', contact: '022 234 5678', district: 'Jaffna'},
    {name: 'Nimal Rajapakse', contact: '023 345 6789', district: 'Jaffna'},
    // Kilinochchi
    {name: 'Vijitha Perera', contact: '024 123 4567', district: 'Kilinochchi'},
    {
      name: 'Chaminda Rathnayake',
      contact: '025 234 5678',
      district: 'Kilinochchi',
    },
    {name: 'Sunil Rajapaksa', contact: '026 345 6789', district: 'Kilinochchi'},
    // Mannar
    {name: 'Dayan Silva', contact: '023 123 4567', district: 'Mannar'},
    {name: 'Asanka Perera', contact: '024 234 5678', district: 'Mannar'},
    {name: 'Chathura Fernando', contact: '025 345 6789', district: 'Mannar'},
    // Vavuniya
    {name: 'Ranjan Bandara', contact: '024 123 4567', district: 'Vavuniya'},
    {name: 'Saman Perera', contact: '025 234 5678', district: 'Vavuniya'},
    {name: 'Kamal Fernando', contact: '026 345 6789', district: 'Vavuniya'},
    // Mullaitivu
    {name: 'Sunil Kumar', contact: '024 123 4567', district: 'Mullaitivu'},
    {name: 'Rohitha Perera', contact: '025 234 5678', district: 'Mullaitivu'},
    {name: 'Nuwan Senarathna', contact: '026 345 6789', district: 'Mullaitivu'},
    // Batticaloa
    {name: 'Kamal Rajapaksa', contact: '065 123 4567', district: 'Batticaloa'},
    {name: 'Roshan Silva', contact: '066 234 5678', district: 'Batticaloa'},
    {name: 'Sanjeewa Perera', contact: '067 345 6789', district: 'Batticaloa'},
    // Ampara
    {name: 'Bandula Kumar', contact: '063 123 4567', district: 'Ampara'},
    {name: 'Ranjith Rajapaksa', contact: '064 234 5678', district: 'Ampara'},
    {name: 'Sunil Fernando', contact: '065 345 6789', district: 'Ampara'},
    // Trincomalee
    {name: 'Rohan Silva', contact: '026 123 4567', district: 'Trincomalee'},
    {
      name: 'Samantha Rajapaksa',
      contact: '027 234 5678',
      district: 'Trincomalee',
    },
    {name: 'Nalin Perera', contact: '028 345 6789', district: 'Trincomalee'},
    // Kurunegala
    {name: 'Chaminda Perera', contact: '037 123 4567', district: 'Kurunegala'},
    {name: 'Asanka Rajapaksa', contact: '038 234 5678', district: 'Kurunegala'},
    {name: 'Sunil Bandara', contact: '039 345 6789', district: 'Kurunegala'},
    // Puttalam
    {name: 'Gayan Silva', contact: '032 123 4567', district: 'Puttalam'},
    {name: 'Ranjan Perera', contact: '033 234 5678', district: 'Puttalam'},
    {name: 'Saman Bandara', contact: '034 345 6789', district: 'Puttalam'},
    // Anuradhapura
    {name: 'Sunil Perera', contact: '025 123 4567', district: 'Anuradhapura'},
    {
      name: 'Roshan Rajapaksa',
      contact: '026 234 5678',
      district: 'Anuradhapura',
    },
    {
      name: 'Kasun Senarathna',
      contact: '027 345 6789',
      district: 'Anuradhapura',
    },
    // Polonnaruwa
    {name: 'Chathura Silva', contact: '027 123 4567', district: 'Polonnaruwa'},
    {name: 'Asanka Perera', contact: '028 234 5678', district: 'Polonnaruwa'},
    {name: 'Sunil Rajapaksa', contact: '029 345 6789', district: 'Polonnaruwa'},
    // Badulla
    {name: 'Nalin Silva', contact: '055 123 4567', district: 'Badulla'},
    {name: 'Ranjith Perera', contact: '056 234 5678', district: 'Badulla'},
    {name: 'Kamal Bandara', contact: '057 345 6789', district: 'Badulla'},
    // Moneragala
    {name: 'Gayan Perera', contact: '055 123 4567', district: 'Moneragala'},
    {name: 'Ranjan Rajapaksa', contact: '056 234 5678', district: 'Moneragala'},
    {name: 'Saman Senarathna', contact: '057 345 6789', district: 'Moneragala'},
    // Ratnapura
    {name: 'Sunil Silva', contact: '045 123 4567', district: 'Ratnapura'},
    {name: 'Roshan Perera', contact: '046 234 5678', district: 'Ratnapura'},
    {name: 'Nalin Rajapaksa', contact: '047 345 6789', district: 'Ratnapura'},
    // Kegalle
    {name: 'Chaminda Silva', contact: '035 123 4567', district: 'Kegalle'},
    {name: 'Asanka Perera', contact: '036 234 5678', district: 'Kegalle'},
    {name: 'Sunil Rajapaksa', contact: '037 345 6789', district: 'Kegalle'},
  ];

  // Function to handle search text change
  const handleSearchTextChange = text => {
    setSearchText(text);
    const filteredDistricts = allDistricts.filter(district =>
      district.toLowerCase().includes(text.toLowerCase()),
    );
    setDistricts(filteredDistricts);
  };

  // Function to handle district selection
  const handleDistrictSelect = district => {
    setSelectedDistrict(district);
    // Filter snake catchers for the selected district
    const catchersForDistrict = allSnakeCatchers.filter(
      catcher => catcher.district === district,
    );
    setSnakeCatchers(catchersForDistrict);
  };

  // Function to clear search text and reset districts
  const clearSearchText = () => {
    setSearchText('');
    setDistricts(allDistricts);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search District"
          value={searchText}
          onChangeText={handleSearchTextChange}
        />
        <TouchableOpacity
          onPress={clearSearchText}
          style={styles.clearIconContainer}>
          <Image
            source={require('../assets/icons8-search.gif')}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.suggestionsList}
        data={districts}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handleDistrictSelect(item)}>
            <Text style={styles.districtItem}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
      />
      {selectedDistrict && (
        <View style={styles.selectedDistrictContainer}>
          <Text style={styles.selectedDistrictText}>
            Selected District: {selectedDistrict}
          </Text>
          <Text style={styles.snakeCatcherHeader}>Snake Catchers:</Text>
          <FlatList
            data={snakeCatchers}
            renderItem={({item}) => (
              <View style={styles.snakeCatcherItem}>
                <Text>Name: {item.name}</Text>
                <Text>Contact: {item.contact}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black', // Set background color to black
  },
  searchContainer: {
    borderRadius:30,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative', // Make the container relative for positioning
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    color: 'white', // Set text color to white
  },
  clearIconContainer: {
    position: 'absolute',
    right: 10,
    top: 10,
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain', // Make sure the image fits the container
  },
  suggestionsList: {
    maxHeight: 200,
  },
  districtItem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    color: 'white', // Set text color to white
  },
  selectedDistrictContainer: {
    marginTop: 20,
  },
  selectedDistrictText: {
    fontWeight: 'bold',
    color: 'white',
  },
  snakeCatcherHeader: {
    marginTop: 10,
    fontWeight: 'bold',
    color: 'white', // Set text color to white
  },
  snakeCatcherItem: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    color: 'white', // Set text color to white
  },
});

export default SnakeCatcherScreen;
