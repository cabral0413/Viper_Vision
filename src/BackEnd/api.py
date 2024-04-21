from flask import Flask, request, jsonify
import os
from main import process_image  # Import the process_image function

app = Flask(__name__)

# Define the API endpoint for image classification
@app.route('/classify', methods=['POST'])
def classify_image():
    if request.method == 'POST':
        # Check if an image file was uploaded
        if 'image' not in request.files:
            return jsonify({'error': 'No image uploaded'}), 400

        # Get the uploaded image file
        image_file = request.files['image']

        # Securely generate a filename to avoid conflicts
        filename = os.path.secure_filename(image_file.filename)

        # Save the image to a temporary location (adjust as needed)
        image_path = os.path.join('uploads', filename)
        image_file.save(image_path)

        # Process the image using the process_image function
        cropped_image, snake_class, confidence = process_image(image_path)

        # Remove the temporary image file
        os.remove(image_path)

        # Prepare the response data
        response = {
            'snake_class': snake_class,
            'confidence': confidence if confidence is not None else None  # Include confidence if available
        }

        return jsonify(response), 200  # Return success response code (200)

if __name__ == '__main__':
    app.run(debug=True)  # Run the Flask server in debug mode (optional)
