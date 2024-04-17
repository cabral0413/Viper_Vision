import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input


def load_mobilenetv2_model(model_path):
    # Load MobileNetV2 model
    model = load_model(model_path)
    return model


def preprocess_image(image):
    # Preprocess image for MobileNetV2
    resized_image = tf.image.resize(image, (224, 224))
    preprocessed_image = preprocess_input(resized_image)
    return preprocessed_image


def classify_snake(image, model):
    # Preprocess image
    preprocessed_image = preprocess_image(image)

    # Perform classification
    prediction = model.predict(np.expand_dims(preprocessed_image, axis=0))
    predicted_class_index = np.argmax(prediction)
    
    # Define snake types
    snake_types = {
        0: "Cobra",
        1: "Common Indian Krait",
        2: "Green Vine Snake",
        3: "Hump Nosed Viper",
        4: "Python",
        5: "Russells Viper",
        # Add more snake types as needed
    }

    # Get the predicted snake type
    predicted_snake_type = snake_types.get(predicted_class_index, "Unknown")

    return predicted_snake_type
