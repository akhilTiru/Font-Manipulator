noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;
function preload() {
    
}
function setup() {
    video = createCapture(VIDEO);
    video.size(500 , 500);
    video.position(50 , 150);
    canvas = createCanvas(500 , 500);
    canvas.position(600 , 140);
    poseNet = ml5.poseNet(video , modelloaded);
    poseNet.on("pose" , gotPoses);
}
function draw() {
    background("#737373");
    fill("white");
    stroke("white");
    text("Akhil" , noseX , noseY);
    textSize(difference);
    document.getElementById("size").innerHTML = "The size of the text is " + difference + "px";
}
function modelloaded() {
    console.log("poseNet is initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("The coordinates of nose are:(" + noseX + "," + noseY +")");
        console.log("The X coordinate of leftWrist is : " + leftWristX);
        console.log("The X coordinate of rightWrist is : " + rightWristX);
        console.log("The difference between the leftWrist and rightWrist is : " + difference);
    }
}