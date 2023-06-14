function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    video.position(10,100);
    canvas=createCanvas(700,400);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Model is loaded");
}
function draw(){
    background("#EAB2E8");
}
function gotPoses(result){
    if (result.length>0){
        console.log(result);
    }
}