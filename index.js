var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

let img = new Image();
img.src = "spritesheets/naked/runRight.png";
img.onload = function() {
  init();
}

var scale = 8;
var runWidth = 896;
var runHeight = 960;
var runWidthScale = runWidth / scale;
var runHeightScale = runHeight / scale;

function init() {
  var frameX = 0;
  var canvasX = 0;
  setInterval(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFrame(frameX, 0, canvasX, 230);
    frameX++;
    canvasX += 8;
    if (frameX > 10) frameX = 0;
    if (canvasX > canvas.width) canvasX = -100;
  }, 40);
}

function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(img,
                    frameX * runWidth, frameY * runHeight,
                    runWidth, runHeight, canvasX, canvasY,
                    runWidthScale, runHeightScale);
}
