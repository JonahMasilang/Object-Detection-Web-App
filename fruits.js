img = "";
status = "";

function preload() {
    img = loadImage("ac.jpg");
}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);

    document.getElementById("status").innerHTML = "Status: Detecting objects.";
}

function draw() {

}

function modelLoaded() {
    console.log("Model loaded.");
    status = "true";
    objectDetector.detect(img, gotResult);
}

function gotResult() {
    if (error) {
        console.error(error);
    } 
    else {
        console.log(results);
    }
}