from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np

app = Flask(__name__)

# Load the MobileNetV2 model (assuming it's in the 'models' folder)
model = load_model('models/MobileNetv2.h5')

# Define a function to preprocess the image
def preprocess_image(img):
  img = img.convert('RGB')  # Convert to RGB mode
  img = img.resize((224, 224))  # Resize to match model input
  img = np.array(img)  # Convert to numpy array
  img = img / 255.0  # Normalize pixel values
  img = np.expand_dims(img, axis=0)  # Add batch dimension
  return img

# Define a function to classify the image
def classify_image(img):
  img = preprocess_image(img)
  prediction = model.predict(img)
  return prediction

# Define a function to get snake names, venom status, and image URLs
def get_snake_info(prediction, top_n=2):
  snake_names = ["Common Indian Krait", "Green Vine Snake", "Hump Nosed Viper", "Indian Cobra", "Python", "Russells Viper"]
  venom_status = ["Highly-Venomous", "Non-Venomous", "Highly-Venomous", "Highly-Venomous", "Non-Venomous", "Highly-Venomous"]
  frontend_base_url = request.host_url  # Get the base URL of the frontend
  image_folder = 'assets/'  # Define the folder where snake images are stored (within frontend)
  image_names = ['krait.jpg', 'VineSnake.jpg', 'PitViper.jpg', 'cobra.jpg', 'python.PNG', 'Russells_Viper.jpg']
  image_paths = [frontend_base_url + image_folder + name for name in image_names]
  top_indices = np.argsort(prediction)[0][-top_n:][::-1]
  predictions = [{'snake_name': snake_names[i], 'probability': prediction[0][i], 'venom_status': venom_status[i], 'snake_image': image_paths[i]} for i in top_indices]
  return predictions

@app.route('/classify', methods=['POST'])
def classify():
  if 'image' not in request.files:
    return jsonify({'error': 'No image found'})
  img_file = request.files['image']
  img = Image.open(img_file)
  prediction = classify_image(img)
  top_predictions = get_snake_info(prediction, top_n=2)
  formatted_predictions = [{'snake_name': info['snake_name'], 'probability': '{:.1%}'.format(info['probability']), 'venom_status': info['venom_status'], 'snake_image': info['snake_image']} for info in top_predictions]
  return jsonify({'predictions': formatted_predictions})

if __name__ == '__main__':
  app.run(host='192.168.1.5', port=5000, debug=True)
