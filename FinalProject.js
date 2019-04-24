let img;
let img2;
var start = 420;
var dec = -.25;

function preload(){
    img = loadImage('Images/Meerkat.png');
    img2 = loadImage('Images/Global_Map.png');
    img3 = loadImage('Images/nebula.png');
    img4 = loadImage('Images/snowleopard.png');
    img5 = loadImage('Images/03-Fire-png-bottom-to-up.png')
    img6 = loadImage('Images/buddha.png');
}

function setup(){
createCanvas(500,500);
background(0, 7, 0);
}

function draw(){
    fill(244, 184, 65);
image(img, 370, 50, img.width/4, img.height/4);


image(img2, 33, 140, img.width/1, img.height/1);
image(img3, 12, 12, img.width/2, img.height/2);

image(img4, 340,290, img.width/10,img.height/10);
image(img4, 300,290, img.width/10,img.height/10);
image(img4, 260,290, img.width/10,img.height/10);
image(img4, 220,290, img.width/10,img.height/10);
image(img4, 180,290, img.width/10,img.height/10);
image(img4, 140,290, img.width/10,img.height/10);
image(img4, 100,290, img.width/10,img.height/10);
image(img4, 60,290, img.width/10,img.height/10);
//image(img4, 20,290, img.width/10,img.height/10);
image(img4, 380,290, img.width/10,img.height/10);
image(img4, 420,290, img.width/10,img.height/10);
image(img5, 0,370, img.width/.7,img.height/2);
image(img6, 105,85, img.width/9,img.height/9);

start = start + dec;
if(start < 10){
    start = start + 420;
}
for(var i = 0; i<5; i++){
    image(img4, start,290, img.width/10,img.height/10);
    start = start + dec;
}


}  




/*function preload(){
    img2 = loadImage('Images/Global_Map.png');
}*/
