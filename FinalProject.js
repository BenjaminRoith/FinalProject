var ghost;
var bg;
var frame;
//the scene is twice the size of the canvas
var SCENE_W = 1920;
var SCENE_H = 1332;

function setup() {
  createCanvas(960,666);
  background(74, 28, 142);

  //create a sprite, and add the 3 animations
  ghost = createSprite(600, 400, 100, 200);

  var myAnimation = ghost.addAnimation('floating', 'assets/ghost_standing0001.png', 'assets/ghost_standing0002.png', 'assets/ghost_standing0003.png', 'assets/ghost_standing0005.png', 'assets/ghost_standing0007.png');
  myAnimation.offY = 30;

  ghost.addAnimation('moving', 'assets/ghost_walk0001.png', 'assets/ghost_walk0002.png', 'assets/ghost_walk0003.png', 'assets/ghost_walk0004.png');

  ghost.addAnimation('spinning', 'assets/ghost_spin0001.png', 'assets/ghost_spin0002.png', 'assets/ghost_spin0003.png');

  bg = new Group();

  //create some background for visual reference
  for(var i=0; i<80; i++)
  {
    //create a sprite with 3 animations
    var dali = createSprite(random(-width, SCENE_W+width), random(-height, SCENE_H+height));
    dali.addAnimation('normal', 'assets/dali.png');
    bg.add(dali);

    var qm = createSprite(random(-width, SCENE_W+width), random(-height, SCENE_H+height));
    qm.addAnimation('normal', 'assets/qm.png');
    bg.add(qm);

    var blood = createSprite(random(-width, SCENE_W+width), random(-height, SCENE_H+height));
    blood.addAnimation('normal', 'assets/blood.png');
    bg.add(blood);

    var eye = createSprite(random(-width, SCENE_W+width), random(-height, SCENE_H+height));
    eye.addAnimation('normal', 'assets/eye.png');
    bg.add(eye);

    var snake = createSprite(random(-width, SCENE_W+width), random(-height, SCENE_H+height));
    snake.addAnimation('normal', 'assets/snake.png');
    bg.add(snake);
}

  frame = loadImage('Final Project/Assets/frame3.png');
}

 function draw() {
  //mouse trailer, the speed is inversely proportional to the mouse distance
  ghost.velocity.x = (camera.mouseX-ghost.position.x)/20;
  ghost.velocity.y = (camera.mouseY-ghost.position.y)/20;

  //.5 zoom is zooming out (50% of the normal size)
  if(mouseIsPressed)
    camera.zoom = 0.5;
  else
    camera.zoom = 1;

  //set the camera position to the ghost position
  camera.position.x = ghost.position.x;
  camera.position.y = ghost.position.y;

  //limit the ghost movements
  if(ghost.position.x < 0)
    ghost.position.x = 3;
  if(ghost.position.y < 0)
    ghost.position.y = 3;
  if(ghost.position.x > SCENE_W)
    ghost.position.x = SCENE_W;
  if(ghost.position.y > SCENE_H)
    ghost.position.y = SCENE_H;

  //draw the scene
  drawSprites(bg);

  //shadow using p5 drawing
  noStroke();
  fill(0, 0, 0, 20);
  //shadow
  ellipse(ghost.position.x, ghost.position.y+90, 80, 30);
  //character hovering above
  drawSprite(ghost);

  camera.off();
  image(frame, 0, 0);

  fill("white");
  textSize(38);
  textStyle(BOLDITALIC);
  text("LOST...", 960, 666);

}

