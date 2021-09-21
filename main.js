noseX=0;
noseY=0;
leftwrist=0;
rightwrist=0;
difference=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(550,550);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet Is Initialized!');
}
function draw()
{
    background("#c0c8d1");
    fill('#FFA500');
    stroke("#83E22B");
    square(noseX,noseY,difference);
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX"+noseX+"noseY"+noseY);

        leftwrist=results[0].pose.leftWrist.x;
        rightwrist=results[0].pose.rightWrist.x;
        difference= floor(leftwrist-rightwrist);

        console.log("leftwrist= "+leftwrist+"rightwrist= "+rightwrist+"difference= "+difference);
    }
}