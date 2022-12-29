
noseX = 0; 
noseY = 0;
noseX1 = 0;
noseY1 = 0;

function preload() {
    clown_nose = loadImage("download-removebg-preview.png");
    moustache = loadImage("moustache.png")
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded() {
    console.log("poseNet is initialized");
}



function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 15;
        noseY = results[0].pose.nose.y - 15;
        noseX1 = results[0].pose.nose.x - 45;
        noseY1 = results[0].pose.nose.y;
        console.log("Nose X = "+ noseX);
        console.log("Nose Y = "+ noseY);
    }
    
}

function draw() {
    image(video,0,0,300,300);
    fill(0,255,0);
    stroke(0,255,0);
    image(clown_nose,noseX,noseY,35,35);
    image(moustache,noseX1,noseY1,100,40);
}


function take_snapshot() {
    save("myFilterImage.png");
}