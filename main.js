noseX=0;
noseY=0;

function preload() {
  clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
  hat = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup() {
  canvas = createCanvas(434, 435);
  canvas.position(503,126);
  video = createCapture(VIDEO);
  video.size(434, 435);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-15;
  }
}

function draw() {
  image(video, 0, 0, 434, 435);
  image(clown_nose, noseX, noseY, 30, 30);
  image(hat, noseX, noseY, 30, 30);
  filter(ERODE)
}

function take_snapshot(){    
  save('myFilterImage.png');
}
function hat(){
    
}