//https://teachablemachine.withgoogle.com/models/5nE6HClmk/

function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/5nE6HClmk/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(){
    
}