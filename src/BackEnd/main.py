import torch
import cv2
from tensorflow.keras.models import load_model

# Assuming yolov8-obb.pt is in the backend/models folder
model = tf.saved_model.load('backend/models/yolov8-obb.pt')

# Import your MobileNetV2 model (assuming it's saved as mobilenetv2.h5)
import tensorflow as tf
from models import MobileNetV2

def process_image(image_path):
    """
    Reads an image, performs YOLOv8 object detection, crops the snake,
    preprocesses it for MobileNetV2, and makes a classification prediction.

    Args:
        image_path (str): Path to the image file.

    Returns:
        tuple: A tuple containing the following elements:
            - cropped_image (ndarray): The cropped image of the detected snake (or None if no snake is found).
            - snake_class (str): The predicted snake class (or None if no snake is found).
            - confidence (float): The confidence score of the YOLOv8 detection (optional).
    """

    # Read the image in color format (BGR for OpenCV)
    image = cv2.imread(image_path, cv2.IMREAD_COLOR)

    # Use GPU if available for faster processing
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

    # Initialize YOLOv8 model
    model_yolov8 = yolov8s_obb.YOLOv8(weights='yolov8n.pt', device='cpu')  # Adjust device as needed (e.g., 'cuda' for GPU)


    # Perform YOLOv8 object detection (adjust confidence and threshold values if needed)
    results = model_yolov8(image)
    if len(results.pandas().xyxy[0]) == 0:  # Check for detected objects
        return None, None, None  # Return None if no snake is detected

    # Extract bounding box coordinates of the first detected object (assuming one snake)
    x_min, y_min, x_max, y_max, conf, class_id = results.pandas().xyxy[0].iloc[0].values

    # Crop the image using bounding box coordinates
    cropped_image = image[y_min:y_max, x_min:x_max]

    # Preprocess the cropped image for MobileNetV2 (adjust as needed)
    cropped_image = cv2.resize(cropped_image, (224, 224))  # Assuming MobileNetV2 input size
    cropped_image = cropped_image.astype('float32') / 255.0  # Normalize pixel values

    # Load MobileNetV2 model (assuming TensorFlow)
    model_mobilenetv2 = tf.keras.models.load_model('models/MobileNetV2_model95.h5')

    # Convert to a batch of one image for prediction
    cropped_image = np.expand_dims(cropped_image, axis=0)

    # Make prediction using MobileNetV2
    prediction = model_mobilenetv2.predict(cropped_image)

    # Map prediction to snake class based on your model's output (adjust as needed)
    snake_classes = ['Cobra', 'Viper', 'Python', 'Rat Snake', 'Harmless Snake']  # Example classes
    snake_class = snake_classes[np.argmax(prediction[0])]

    return cropped_image, snake_class, conf  # Return cropped image, class, and confidence (optional)

# Example usage (assuming you have an image named 'test.jpg')
cropped_image, snake_class, confidence = process_image('test.jpg')

if cropped_image is not None:
    print(f"Predicted snake class: {snake_class} (confidence: {confidence:.2f})")
else:
    print("No snake detected in the image.")
