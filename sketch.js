var a,b;
var c,d;


function setup() {
  createCanvas(800,400);
  a=createSprite(200, 200, 100, 100);
  b=createSprite(300, 200, 50, 50);
  c=createSprite(400, 300, 50, 50);
  d=createSprite(400, 100, 50, 50);
  c.velocityY=-5;
  d.velocityY=5;


}

function draw() {
  background(255,255,255);  
b.x=World.mouseX;
b.y=World.mouseY;

if(b.x-a.x<a.width/2+b.width/2 && a.x-b.x<b.width/2+a.width/2 &&a.y-b.y<a.height/2+b.height/2&&b.y-a.y<a.height/2+b.height/2
  
  ){
  b.shapeColor="green"
  a.shapeColor="green"
}
else
{
  b.shapeColor="red"
  a.shapeColor="red"
}
if(d.x-c.x<c.width/2+b.width/2 && c.x-d.x<d.width/2+c.width/2){
  d.velocityX=d.velocityX*(-1);
  c.velocityX=c.velocityX*(-1);

}
if(d.y-c.y<c.height/2+b.height/2 && c.y-d.y<d.height/2+c.height/2){
  d.velocityY=d.velocityY*(-1);
  c.velocityY=c.velocityY*(-1);

}
  drawSprites();
}