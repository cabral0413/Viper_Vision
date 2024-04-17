import cv2
import torch
import numpy as np
from torchvision.transforms import functional as F
from torchvision.models.detection import yolov3


def load_yolov8_model(model_path):
    # Load YOLOv8 model
    model = yolov3(pretrained=False)
    model.load_state_dict(torch.load(model_path))
    model.eval()
    return model


def perform_object_detection(image, model):
    # Preprocess image
    img = F.to_tensor(image).unsqueeze(0)
    img = F.normalize(img, mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])

    # Perform object detection
    with torch.no_grad():
        predictions = model(img)

    return predictions


def crop_snake_from_image(image, predictions, confidence_threshold=0.5):
    # Get bounding box coordinates for detected objects
    boxes = predictions[0]['boxes'].detach().cpu().numpy()
    scores = predictions[0]['scores'].detach().cpu().numpy()

    # Filter out boxes with low confidence
    selected_boxes = boxes[scores > confidence_threshold]

    # Assume only one snake in the image
    if len(selected_boxes) > 0:
        # Get coordinates of the snake bounding box
        x_min, y_min, x_max, y_max = selected_boxes[0]
        x_min, y_min, x_max, y_max = int(x_min), int(y_min), int(x_max), int(y_max)

        # Crop the snake from the image
        cropped_snake = image[y_min:y_max, x_min:x_max]

        return cropped_snake

    else:
        return None
