var myImage;
var magic;
var speech;
var comic;
var backpack;
var song;
function preload(){
// uploading images and sound
myImage = loadImage("./assets/farm-min.jpg");
magic = loadImage("./assets/dora-min.png");
comic = loadImage("./assets/baloon.png");
backpack = loadImage("./assets/backpack-min.png");
song = loadSound("./assets/backpack song.mp3")
}

function setup() {
createCanvas(windowWidth, windowHeight);
// set the background image
background(myImage);
speech = new p5.Speech();
mic = new p5.AudioIn();
mic.start();
}

function draw() {
// set  the image of Dora
imageMode(CENTER);
image(magic, 400 , height/2, width/3, height/3);
push()
// set the instruction text
textSize(32);
textStyle("bold")
fill("white");
text("*click to interact with Dora", 250, 600);
pop()
// set the mic inpu
console.log(volume)
var volume = mic.getLevel();
// set the song
if(volume > 0.5){
  image(backpack, 1200, 600, width/4, height/3.5);
  song.play();
 play(1);
 song.loop();
  }
}

function mousePressed() {
// set the voice of Dora
  speech.setVoice("Zira");
  speech.speak("would you help me to fill my backpack?");
  console.log(speech.listVoices());
  image(comic, 600, 180, width/4, height/4);
  textSize(16);
  textStyle("bold");
  fill("#f371ad");
  text("would you help me to fill my backpack?", 455, 180);
// second instruction text
  textSize(32);
  textStyle("bold")
  fill("white");
  text("*answer I WILL HELP YOU, scream  very loud!", 250, 650);
// last instruction
  textSize(16);
  textStyle("bold")
  fill("white");
  text("*if nothing happens, you weren't loud enough", 600, 680);

}
