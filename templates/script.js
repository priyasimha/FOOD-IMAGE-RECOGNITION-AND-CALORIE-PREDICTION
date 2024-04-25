function uploadImage() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];

    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var imageContainer = document.getElementById('imageContainer');
            imageContainer.innerHTML = '<img src="' + e.target.result + '" alt="Uploaded Image">';
        }
        reader.readAsDataURL(file);
    }
}

function recognizeFood() {
    // Placeholder function for food recognition and calorie prediction
    var recognizedFood = "Pizza";
    var predictedCalories = 300;

    var result = document.getElementById('result');
    result.innerHTML = 'Food: ' + recognizedFood + '<br>Predicted Calories: ' + predictedCalories;
}
