img=[];
let idx=0;

function setup() {
  createCanvas(400, 400);
  img[0]=loadImage("1.png");
  img[1]=loadImage("2.png");
  img[2]=loadImage("3.png");
  img[3]=loadImage("4.png");
  //frameRate(15);
}

function draw() {
  background(220);
  image (img[idx],20,20);
  if (frameCount % 5==0)idx=idx+1;
  if (idx>3)idx=0;
}



