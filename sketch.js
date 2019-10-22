var myImage;
var magic;
var speech;
var comic;
var backpack;
var song;
function preload(){
myImage = loadImage("./assets/farm.jpg");
magic = loadImage("./assets/dora.png");
comic = loadImage("./assets/baloon.png");
backpack = loadImage("./assets/backpack.png");
song = loadSound("./assets/backpack song.mp3")
}

function setup() {
createCanvas(windowWidth, windowHeight);
background(myImage);
speech = new p5.Speech();
mic = new p5.AudioIn();
mic.start();
}

function draw() {
imageMode(CENTER);
image(magic, 400 , height/2, width/3, height/3);
push()
textSize(32);
textStyle("bold")
fill("white");
text("*click to interact with Dora", 250, 600);
pop()
console.log(volume)
var volume = mic.getLevel();
if(volume > 0.5){
  image(backpack, 1200, 600, width/4, height/3.5);
  song.play();
 play(1);
 song.loop();
  }
}

function mousePressed() {
  speech.setVoice("Zira");
  speech.speak("would you help me to fill my backpack?");
  console.log(speech.listVoices());
  image(comic, 600, 180, width/4, height/4);
  textSize(16);
  textStyle("bold");
  fill("#f371ad");
  text("would you help me to fill my backpack?", 455, 180);
  textSize(32);
  textStyle("bold")
  fill("white");
  text("*answer I WILL HELP YOU, scream loud!", 250, 650);


}
