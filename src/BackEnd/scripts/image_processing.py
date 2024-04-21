from flask import Flask, request, jsonify, send_file
import os
from PIL import Image
import io
from torchvision.transforms import functional as F
import torch


app = Flask(__name__)

# Load YOLOv8 model
yolo_model = torch.load('models/yolov8s-obb.pt')

# Define function to perform object detection and crop images
def detect_and_crop(image_path):
    # Perform object detection
    detections = yolo_model.detect(image_path)
    
    cropped_images = []
    
    # Process each detected object
    for detection in detections:
        box = detection['box']
        x1, y1, x2, y2 = box
        
        # Crop the detected object from the original image
        image = Image.open(image_path)
        cropped_image = image.crop((x1, y1, x2, y2))
        
        # Convert cropped image to byte array
        with io.BytesIO() as output:
            cropped_image.save(output, format="JPEG")
            cropped_images.append(output.getvalue())
    
    return cropped_images

@app.route('/detect-and-crop', methods=['POST'])
def detect_and_crop_route():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'})

    image = request.files['image']
    image_path = 'temp.jpg'  # Save the uploaded image
    image.save(image_path)

    # Perform object detection and cropping
    cropped_images = detect_and_crop(image_path)

    # Return the cropped images as byte arrays
    return jsonify({'cropped_images': cropped_images})

if __name__ == '__main__':
    app.run(debug=True)

