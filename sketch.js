var bullet;
var wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223, 321);
  weight=random(30, 52);
  thickness = random(22,);
  bullet= createSprite(50, 200, 50, 15);
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background(0,0,0);  
  bullet.velocityX = speed/1.5;
  
//   if(deformation > 180){
//   bullet.shapeColor=color(255, 0, 0);
// }

// if(deformation < 100){
//   bullet.shapeColor=color(0, 255, 0);
// }

// if(deformation < 180 && deformation > 100){
//   bullet.shapeColor=color(230, 230, 0);
// }
 isTouching();
  drawSprites();
}

function isTouching(){
  if(wall.x-bullet.x < bullet.width/2+wall.width/2){
    var damage = 0.5*weight*speed*speed/thickness*thickness*thickness
   bullet.velocityX=0;
  }
  if(damage < 10){
    bullet.shapeColor = color(0, 255, 0); 
   } else if(damage > 10) {
    bullet.shapeColor = color(255, 0, 0); 
   }
}
