var garden,rabbit,apple,orangeL,redL;
var gardens,rabbits,carrots,oranges,reds,apples;


function preload(){
  gardens = loadImage("garden.png");
  rabbits = loadImage("rabbit.png");
  apples = loadImage("apple.png");
  oranges = loadImage("orangeLeaf.png");
  reds = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardens);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbits);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();
   
  
 var select_sprites = Math.random(1,3);

 var select_sprites = Math.random(random(1,3));

 var select_sprites = Math.round(1,3);

 var select_sprites = Math.round(random(1,3));

  
   if (frameCount % 50 == 0) {
     if (select_sprites == 1) {
       createApples();
     } else if (select_sprites == 2) {
       createOrange();
     }else {
       createRed();
     }
   }

   if (frameCount % 80 == 0) {
     if (select_sprites == 1) {
       createApples();
     } else if (select_sprites == 2) {
       createOrange();
     }
   }

   if (frameCount / 80 == 0) {
     if (select_sprites == 1) {
       createApples();
     } else if (select_sprites == 2) {
       createOrange();
     }else {
       createRed();
     }
   }

   if (frameCount % 80 == 0) {
     if (select_sprites == 1) {
       createApples();
     } else if (select_sprites == 2) {
       createOrange();
     }else {
       createRed();
     }
   }



}

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(apples);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
  
}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(oranges);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(reds);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
}
