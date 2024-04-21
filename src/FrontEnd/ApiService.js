import axios from 'axios';

const ApiService = {
  uploadImage: async imageData => {
    try {
      const formData = new FormData();
      formData.append('image', {
        uri: imageData.uri,
        type: 'image/jpeg',
        name: 'image.jpg',
      });

      const response = await axios.post(
        'http://your-flask-server-ip:5000/process_image',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      return response.data.class_label;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error; // Optionally handle errors in the calling component
    }
  },
};

export default ApiService;
