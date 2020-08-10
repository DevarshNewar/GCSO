var car,wall;
var speed,weight;
var deformation;
//var tracks

function setup() {
  createCanvas(1300,400);

  //creating speed and weight for car
  speed = prompt("Enter the speed of the car :");
  weight = prompt("Enter the weight of the car :");

  //creating car and wall
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1200, 200, 60, height/2);
  
  //giving speed to the car
  car.velocityX = speed;

}

function draw() {
  background(0); 
  //giving colour to the wall
  wall.shapeColor = color(80,80,80);
  
  //creating track lines
  //for (let i = 0; i < 1100; i = i + 200) {
  //  tracks = createSprite(i,200,100,30);    
  //}

  //making the collision
  if (wall.x - car.x < car.width/2 + wall.width/2) {
   car.velocityX = 0;
   deformation = 0.5 * weight * speed * speed/22500;

   //danger state
   if (deformation > 180) {
     car.shapeColor = color(250,0,0);
   }
   
   //average state
   if (deformation < 180 && deformation > 100) {
     car.shapeColor = color(230,230,0);
   }
   
   //good stste
   if (deformation < 100) {
     car.shapeColor = color(0,250,0);
   }
  }
 
  drawSprites();
}