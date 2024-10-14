/*import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import CustomHeader from '../components/CustomHeader'; // Import CustomHeader component

const SnakeCatcherScreen = ({navigation}) => {
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
      <View style={styles.mainContent}>
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
                  <Text style={styles.snakeCatcherText}>Name: {item.name}</Text>
                  <Text style={styles.snakeCatcherText}>
                    Contact: {item.contact}
                  </Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainContent: {
    flex: 1,
    padding: 20, // Add padding around the main content
    marginTop: 10, // Add margin to account for the header height
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
    paddingHorizontal: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'gray',
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: 'black',
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
    resizeMode: 'contain',
  },
  suggestionsList: {
    maxHeight: 200,
  },
  districtItem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    color: 'black',
  },
  selectedDistrictContainer: {
    marginTop: 20,
  },
  selectedDistrictText: {
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 15,
  },
  snakeCatcherHeader: {
    marginTop: 10,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 15,
  },
  snakeCatcherItem: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    borderColor: 'white',
    color: 'black',
    marginLeft: 30,
  },
  snakeCatcherText: {
    color: 'black',
  },
});

export default SnakeCatcherScreen;
*/



import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';
import CustomHeader from '../components/CustomHeader'; // Import CustomHeader component

const SnakeCatcherScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [allDistricts, setAllDistricts] = useState([
    // List of districts
    'Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Matale', 'Nuwara Eliya', 
    'Galle', 'Matara', 'Hambantota', 'Jaffna', 'Kilinochchi', 'Mannar', 
    'Vavuniya', 'Mullaitivu', 'Batticaloa', 'Ampara', 'Trincomalee', 
    'Kurunegala', 'Puttalam', 'Anuradhapura', 'Polonnaruwa', 'Badulla', 
    'Moneragala', 'Ratnapura', 'Kegalle',
  ]);
  const [districts, setDistricts] = useState(allDistricts);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [snakeCatchers, setSnakeCatchers] = useState([]);

  // Mock data for snake catchers
  const allSnakeCatchers = [
    {name: 'Kamal Perera', contact: '0711234567', district: 'Colombo'},
    {name: 'Sunil Silva', contact: '0772345678', district: 'Colombo'},
    {name: 'Nimal Fernando', contact: '0703456789', district: 'Colombo'},
    {name: 'Saman Jayawardena', contact: '0724567890', district: 'Gampaha'},
    {name: 'Kasun Bandara', contact: '0785678901', district: 'Gampaha'},
    {name: 'Rohan Rajapaksa', contact: '0766789012', district: 'Gampaha'},
    // Add more snake catchers here
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
  const handleSearchTextChange = (text) => {
    setSearchText(text);
    const filteredDistricts = allDistricts.filter(district =>
      district.toLowerCase().includes(text.toLowerCase()),
    );
    setDistricts(filteredDistricts);
  };

  // Function to handle district selection
  const handleDistrictSelect = (district) => {
    setSelectedDistrict(district);
    const catchersForDistrict = allSnakeCatchers.filter(
      (catcher) => catcher.district === district,
    );
    setSnakeCatchers(catchersForDistrict);
  };

  // Function to clear search text
  const clearSearchText = () => {
    setSearchText('');
    setDistricts(allDistricts);
  };

  // Function to make the contact number clickable and open the dialer
  const callNumber = (phoneNumber) => {
    const url = `tel:${phoneNumber}`;
    Linking.openURL(url).catch((err) => console.error('Error:', err));
  };

  // Render snake catchers for selected district
  const renderSnakeCatchers = ({item}) => (
    <View style={styles.snakeCatcherCard}>
      <Text style={styles.snakeCatcherName}>{item.name}</Text>
      <View style={styles.contactContainer}>
        <Text style={styles.snakeCatcherContact}>
          Contact: <Text onPress={() => callNumber(item.contact)} style={styles.snakeCatcherPhone}>{item.contact}</Text>
        </Text>
      </View>
    </View>
  );
  


  return (
    <View style={styles.container}>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search District"
          value={searchText}
          onChangeText={handleSearchTextChange}
        />
        <TouchableOpacity onPress={clearSearchText}>
          <Text style={styles.clearButton}>Clear</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={districts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.districtButton}
            onPress={() => handleDistrictSelect(item)}>
            <Text style={styles.districtButtonText}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      {selectedDistrict && (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsTitle}>
            Snake Catchers in {selectedDistrict}:
          </Text>
          <FlatList
            data={snakeCatchers}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderSnakeCatchers}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 8,
    height: 40,
    backgroundColor: '#fff',
    color: '#333',
  },
  clearButton: {
    marginLeft: 10,
    color: 'blue',
    fontSize: 16,
  },
  districtButton: {
    padding: 12,
    backgroundColor: '#e0e0e0',
    marginBottom: 8,
    borderRadius: 8,
  },
  districtButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  resultsContainer: {
    marginTop: 20,
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  snakeCatcherCard: {
    padding: 12,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  snakeCatcherName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  contactContainer: {
    flexDirection: 'row', // Ensures "Contact:" and the phone number are on the same line
    alignItems: 'center', // Vertically align the text and number
    marginTop: 4,
  },
  snakeCatcherContact: {
    fontSize: 14,
    color: '#333', // Regular contact label text style
  },
  snakeCatcherPhone: {
    fontSize: 14,
    color: 'blue', // Style the phone number in blue and underline it
    textDecorationLine: 'underline', // Underline only the phone number
  },
});

export default SnakeCatcherScreen;
