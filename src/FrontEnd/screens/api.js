// api.js

// Import Axios for making HTTP requests
import axios from 'axios';

// Function to fetch nearest hospitals from an API
export const findNearestHospitals = async (latitude, longitude) => {
  try {
    const response = await axios.get(`https://example.com/api/hospitals?lat=${latitude}&lng=${longitude}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching nearest hospitals:', error);
    throw error;
  }
};
