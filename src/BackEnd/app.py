from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np

app = Flask(__name__)

# Load the MobileNetV2 model
model = load_model('models/mobilenetv2.h5')

# Define a function to preprocess the image
def preprocess_image(img):
    img = img.convert('RGB')  # Convert to RGB mode (in case of grayscale images)
    img = img.resize((224, 224))  # Resize to match the input shape of MobileNetV2
    img = np.array(img)  # Convert to numpy array
    img = img / 255.0  # Normalize pixel values to [0, 1]
    img = np.expand_dims(img, axis=0)  # Add batch dimension
    return img

# Define a function to classify the image
def classify_image(img):
    img = preprocess_image(img)
    prediction = model.predict(img)
    return prediction

# Define a function to get snake names
def get_snake_names(prediction, top_n=2):
    # Example snake names list
    snake_names = ["Common Indian Krait", "Green Vine Snake", "Hump Nosed Viper", "Indian Cobra", "Python", "Russells Viper"]
    # Get indices of top N predictions
    top_indices = np.argsort(prediction)[0][-top_n:][::-1]
    # Get corresponding snake names and probabilities
    predictions = [(snake_names[i], prediction[0][i]) for i in top_indices]
    return predictions

@app.route('/classify', methods=['POST'])
def classify():
    # Check if the POST request has an image
    if 'image' not in request.files:
        return jsonify({'error': 'No image found'})

    img_file = request.files['image']

    # Open image using PIL
    img = Image.open(img_file)
    
    # Load and classify the image
    prediction = classify_image(img)

    # Get the top N snake names and probabilities
    top_predictions = get_snake_names(prediction, top_n=2)

    # Format the probabilities as percentages
    formatted_predictions = [{'snake_name': name, 'probability': '{:.1%}'.format(prob)} for name, prob in top_predictions]

    # Return classification results with snake names and formatted probabilities
    return jsonify({'predictions': formatted_predictions})

if __name__ == '__main__':
    app.run(debug=True)
