var car, speed, deformation,weight, collider;


function setup() {
  createCanvas(1600,400);
  car=createSprite(0,195,70,30);
  collider=createSprite(1500,195,60,200);
  car.shapeColor="white";
  collider.shapeColor=color(80,80,80);
  weight=Math.round(random(400, 1500));
  speed=Math.round(random(50,90));
  car.velocityX=speed;
  }

function draw() {
  background("black"); 
  text("SPEED:"  +car.velocityX, 500, 40 );
  text("WEIGHT:"  +weight, 700, 40 );
  
  if( collider.x - car.x < collider.width/2 + car.width/2){
        car.velocityX=0; 
        deformation=(0.5*weight*speed*speed)/22500;
        text("DEFORMATION:" +deformation,900, 40);
    if(deformation>180){
      car.shapeColor=color(255,0,0); 
     }
    if(deformation>100 && deformation<180){
          car.shapeColor=color(230, 230, 0);
     }
    if(deformation<100){
      car.shapeColor=color(0, 255, 0);  
     }
  }

  drawSprites();
 
}