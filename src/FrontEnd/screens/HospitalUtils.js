const GOOGLE_PLACES_API_KEY = 'AIzaSyBlIfo_mvXYi-urqOxRJYnj4rb1Sq296O0'; // Replace with your API key

export const findNearbyHospitals = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&keyword=hospital&key=${GOOGLE_PLACES_API_KEY}`,
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};
