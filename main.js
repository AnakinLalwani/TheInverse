let capture;

function setup() {
    canvas = createCanvas(480, 320);
    canvas.center();
    capture = createCapture(VIDEO);
    canvas.center
    capture.size(480, 320);
    capture.hide();
    
    modes = [BLUR,INVERT] ;
    currentmode = modes[0];
  
}

function draw() {
  background(255);
  image(capture, 0, 0, 480, 320);
  filter(currentmode)
}
function Inverse() {
  if (currentmode == modes[0]){
    currentmode = modes[1];
    draw();
    document.getElementById("inverse").innerHTML="Go Back";
  } else {
    currentmode = modes[0];
    draw()
    document.getElementById("inverse").innerHTML="Inverse";
  }
}
function take_snapshot() {
    save("myInvert.png");
}