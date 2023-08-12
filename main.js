


function preload(){
}



function setup(){
   canvas = createCanvas(640, 480);
   canvas.position(110, 250);
   video =createCapture(VIDEO);
   video.hide();

   tintColor = "";
}

function draw(){
   image(video, 0, 0, 640, 480);
   tint(tintColor);
   fill("black")
   circle(30, 30, 20);
   ellipse(56, 46, 55, 55);
   circle(90, 30, 20);
   ellipse(146, 46, 55, 55);
   rect(100, 150, 100, 20 );
}

function takeSnapshot(){
   save('studentName.png');
}

function filterTint() {
   tintColor = document.getElementById("colorName").value;
}
