from flask import Flask, request, jsonify
from image_processing import crop_snake, classify_snake

app = Flask(__name__)

@app.route('/process_image', methods=['POST'])
def process_image():
    # Receive image from frontend
    image = request.files['image']

    # Perform object detection and crop the snake
    cropped_snake_image = crop_snake(image)

    # Perform image classification
    classification_result = classify_snake(cropped_snake_image)

    # Return classification result to frontend
    return jsonify(classification_result)

if __name__ == '__main__':
    app.run(debug=True)
