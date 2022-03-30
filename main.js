noseX = "";
noseY="";
leftWristX = '';
leftWristY = '';
rightWristY = "";
rightWristX = "";
Difference = '';

function draw(){
background("black");
square(noseX,noseY,Difference);
document.getElementById('W_and_H').innerHTML = Difference;
}

function setup(){
    video = createCapture(VIDEO);
    video.size(400,430)
canvas =  createCanvas(400, 450);
canvas.position(500,240);
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}

function gotPoses(result){
if(result.length){
    console.log(result)
    noseX = result[0].pose.nose.x;
    noseY = result[0].pose.nose.y;
    leftWristX = result[0].pose.leftWrist.x;
    leftWristY = result[0].pose.leftWrist.y;
    rightWristX = result[0].pose.rightWrist.x;
    rightWristY = result[0].pose.rightWrist.y;
    Difference = floor(leftWristX - rightWristX);
    



};
}

function modelLoaded(){
    console.log('Model is working');
}

function preload(){
    
}