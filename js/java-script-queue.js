console.log("queue-2.js file is loaded...");

// Get boxes
let boxes = new Array(6);
for (let i = 0; i < 6; i++) {
  boxes[i] = document.getElementById("box-" + (i + 1));
}

// Colors
let colors = [
  "rgb(255, 151, 253)",
  "rgb(211, 0, 187)",
  "red",
  "green",
  "blue",
  "yellow"
];

let currentColor = 0;
let intervalId = null;

function changeColor() {
  // Shift colors to the right
  currentColor = (currentColor + colors.length - 1) % colors.length; // Move backward in the color array
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = colors[(currentColor + i) % colors.length];
  }
}

// Start animation
function startAnimation() {
  if (!intervalId) {
    intervalId = setInterval(changeColor, 1000);
  }
}

// Stop animation
function stopAnimation() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

// Add event listeners
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("start-btn").addEventListener("click", startAnimation);
  document.getElementById("stop-btn").addEventListener("click", stopAnimation);
});