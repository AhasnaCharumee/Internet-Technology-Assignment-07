console.log("queue-1.js file is loaded");

let letters = ["A", "B", "C", "D", "E", "F"];

let persons = new Array(6);
for (let i = 0; i < 6; i++) {
  persons[i] = document.getElementById("per-" + (i + 1));
}

let currentPer = 0;
let currentLetter = 5;

let intervalId = null;

function startLoop() {
  for (let i = 0; i < persons.length; i++) {
    document.getElementById("per-" + (currentPer + 1)).innerHTML =
      '<span class="letter">' + letters[currentLetter] + "</span>";

    console.log("per - " + (currentPer + 1) + " and letter - " + currentLetter);
    calculateCurrentLetter();
    calculateCurrentPer();
  }
  changeLetter();
}

// Control functions
function startAnimation() {
  if (!intervalId) {
    intervalId = setInterval(startLoop, 1000);
  }
}

function stopAnimation() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

function calculateCurrentLetter() {
  currentLetter = (currentLetter + 1) % letters.length;
}

function calculateCurrentPer() {
  currentPer = (currentPer + 1) % persons.length;
}

function changeLetter() {
  currentLetter = (currentLetter + letters.length - 1) % letters.length;
}

// Add button listeners
document.getElementById("start-btn").addEventListener("click", startAnimation);
document.getElementById("stop-btn").addEventListener("click", stopAnimation);
