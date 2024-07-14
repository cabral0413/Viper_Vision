from flask import Flask, request
from ultralytics import YOLO
from PIL import Image

app = Flask(__name__)

@app.route('/classify', methods=['POST'])
def predict():
    file = request.files['image']
    img = Image.open(file.stream).convert("RGB")  # Ensure it's in RGB format
    
    model = YOLO('models/best.pt')  # Make sure the path is correct
    results = model(img)  # Directly pass PIL image

    # Check if any detections are made
    if len(results) == 0:
        return {'message': 'No objects detected in the image.'}
    
    # Assuming we're doing classification, let's find the top two classes if available
    if len(results) >= 2:
        top_classes = [(results[i].names[results[i].probs.top1], results[i].probs.top1conf.item()) for i in range(2)]
    else:
        top_classes = [(results[i].names[results[i].probs.top1], results[i].probs.top1conf.item()) for i in range(len(results))]
    
    # Determine venom status for each top class
    top_venom_status = [get_venom_status(class_name) for class_name, _ in top_classes]
    
    # Format the probabilities as percentages with two decimal points
    formatted_probs = ["{:.2%}".format(confidence) for _, confidence in top_classes]

    # Check if confidence is below 70% for any top class
    if any(confidence < 0.7 for _, confidence in top_classes):
        return {'message': 'No snakes detected with sufficient confidence. Please upload a clearer photo.'}

    return {'top_predictions': [{'class': class_name, 'probability': prob, 'venom_status': venom_status}
                                for (class_name, _), prob, venom_status in zip(top_classes, formatted_probs, top_venom_status)]}

def get_venom_status(class_name):
    # Implement your logic to determine venom status based on the class name
    # This could involve querying a database or using predefined mappings
    # For example:
    if class_name == 'Common Indian Krait':
        return 'Venomous'
    elif class_name == 'Python':
        return 'Venomous'
    elif class_name == 'Hump Nosed Viper':
        return 'Venomous'
    elif class_name == 'Green Vine Snake':
        return 'Non-venomous'
    elif class_name == 'Russells Viper':
        return 'Venomous'
    elif class_name == 'Indian Cobra':
        return 'Venomous'
    else:
        return 'Unknown'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
