let video;
let poseNet;
let pose;



function setup() {
  createCanvas(400, 400);
  video =createCapture(VIDEO);
  video.hide();
  poseNet =ml5.poseNet(video,{
 imageScaleFactor: 0.3,
 outputStride: 16,
 flipHorizontal: false,
 minConfidence: 0.5,
 maxPoseDetections: 5,
 scoreThreshold: 0.5,
 nmsRadius: 20,
 detectionType: 'multiple',
 multiplier: 0.75,
},modelLoaded);
  poseNet.on('pose',gotPoses);
}
function gotPoses(poses){
console.log(poses);
  if(poses.length>0){
    pose=poses[0].pose;
  }
}
function modelLoaded(){
  console.log('posenet ready ');

}

function draw() {
  image(video,0,0);
  if(pose){
    
  fill(255,0,0);
  ellipse(pose.nose.x, pose.nose.y, 64);
    fill(0,0,255);
    ellipse(pose.rightWrist.x,pose.rightWrist.y,32);
    ellipse(pose.leftWrist.x,pose.leftWrist.y,32);
  }
  
}