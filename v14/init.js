console.log("init js called");
// ----------------- set up code includes resolution management
var myScale = 0;

function setupCanvas(canvas) {
  var dpr = window.devicePixelRatio || 1;   // Get the device pixel ratio, falling back to 1.
  myScale=dpr;
  var rect = canvas.getBoundingClientRect();  // Get the size of the canvas in CSS pixels.
  canvas.width = rect.width * dpr; // Give the canvas pixel dimensions of their CSS
  canvas.height = rect.height * dpr;  // size * the device pixel ratio.
  var ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr); // Scale all drawing operations by the dpr, so you don't have to worry about the difference.
  return ctx;
}

// basic drawing on the canvas with no functions
// Now this line will be the same size on the page but will look sharper on high-DPI devices!

var ctx = setupCanvas(document.querySelector('#myCanvas'));
canvas = document.querySelector('#myCanvas');
const width = canvas.width/myScale;
const height = canvas.height/myScale;

//-----------------------------
var colArray=[
    [
    "rgba(255,255,255,1)", "rgba(153,153,153,1)", "rgba(0,0,0,1)", 
    "rgba(255, 153, 153,0.33)","rgba(255, 77, 77,0.67)","rgba(255, 26, 26,1)",
    "rgba(255, 179, 128,0.67)","rgba(255, 148, 77,0.67)","rgba(255, 117, 26,1)",
    "rgba(115,115,115)"
    ],
    [
      "rgba(255, 255, 153,0.33)", "rgba(255, 255, 77,0.67)", "rgba(255, 255, 0,1)", 
    "rgba(153, 255, 153,0.33)","rgba(102, 255, 102,0.67)","rgba(0, 230, 0,1)",
    "rgba(153, 214, 255,0.33)","rgba(77, 184, 255,0.67)","rgba(0, 153, 255,1)",
    "rgba(221, 153, 255,0.33)", "rgba(204, 102, 255,0.67)", "rgba(179, 26, 255,1)"
    ],
    [
        "rgba(255,255,255,0.33)", "rgba(153,153,153,0.67)", "rgba(0,0,0,0.67)", 
        "rgba(204,0,0,0.33)","rgba(255,204,51,0.67)","rgba(51,51,255,0.67)",
        "rgba(0,153,204,0.33","rgba(255,255,153,0.67)","rgba(255,255,102,0.67)"
    ],
    [
        "rgba(255,255,255,0.33)", "rgba(153,153,153,0.33)", "rgba(0,0,0,0.33)", 
        "rgba(204,0,0,0.33)","rgba(255,204,51,0.33)","rgba(51,51,255,0.33)",
        "rgba(0,153,204,0.33)","rgba(255,255,153,0.33)","rgba(255,255,102,0.33)", 
        "rgba(179, 179, 204)", "rgba(163, 194, 194)"
    ]
    ]