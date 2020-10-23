var ball, paddle;
var ballImage;
var paddleImage;
var edges;

function preload() {
  // Pre-loading ball image
  ballImage = loadImage("ball.png");
  
  // Pre-loading paddle image
  paddleImage = loadImage("paddle.png");
}

function setup() {
  // Create canvas of size 400 x 400
  createCanvas(400, 400);
  
  // Create ball sprite and add the image to it, and giving it a velocityX of 7
  ball = createSprite(200, 200, 10, 10);
  ball.addImage("ball", ballImage);
  ball.velocityX = 7;

  // Create paddle sprite and add image to it
  paddle = createSprite(360, 150, 10, 50);
  paddle.addImage("paddle", paddleImage);
}

function draw() {
  // Changing the background colour
  background(205, 153, 0);
  
  // Creating the edge sprites
  edges = createEdgeSprites();

  // Making the paddle move with the mouse's y position
  paddle.y = World.mouseY;

  // Make the ball bounce off of top, left and bottom edge
  // 0 --> Left, 1 --> Right, 2 --> Top, 3 --> Bottom
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[0]);

  // Make the ball boune off of the paddle
  // Everytime the ball bounces off, call the randomVelocity function
  ball.bounceOff(paddle, randomVelocity);

  // Stop the paddle from leaving the screen from top and bottom edge of the canvas
  paddle.collide(edges[2]);
  paddle.collide(edges[3]);

  // To move the paddle up with up arrow key
  if (keyDown(UP_ARROW)) {
    // Using - 5 as we are moving up
    // paddle.y = paddle.y - 5;
  }

  // To move the paddle down with down arrow key
  if (keyDown(DOWN_ARROW)) {
    // Using + 5 as we are moving down
    // paddle.y = paddle.y + 5;
  }
  
  // Display all the sprites in the game
  drawSprites();

}

function randomVelocity() {
  // Create a random variable between -7, and 7 to give as velocityY to the ball
  // Including -ve number as well, because it might go up or down. 
  var rand = Math.round(random(-7, 7));
  
  // Making the game very unpredicatable as the ball might move diagonally up or down with varying speed
  ball.velocityY = rand;

}