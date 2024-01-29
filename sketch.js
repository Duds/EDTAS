let canvasSize = 4096;
let gridSize = 4;
let images = [];
let currentArt = [];

function preload() {
  for (let i = 1; i <= 153; i++) {
    let imgPath = `images/image_${i}.jpg`; // Adjusted path to the 'images' folder
    images.push(loadImage(imgPath));
  }
}

function setup() {
  createCanvas(canvasSize, canvasSize);
  setRandomArt();
  setInterval(setRandomArt, getRandomTimeInterval());
}

function draw() {
  // Optionally, add any drawing logic here
}

function setRandomArt() {
  currentArt = [];
  let availableImages = [...images];
  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      let randomIndex = floor(random(availableImages.length));
      let randomImage = availableImages.splice(randomIndex, 1)[0];
      currentArt.push(randomImage);
      image(randomImage, x * (canvasSize / gridSize), y * (canvasSize / gridSize), canvasSize / gridSize, canvasSize / gridSize);
    }
  }
}

function getRandomTimeInterval() {
  return Math.floor(Math.random() * (60000 - 5000) + 5000); // Random interval between 5 seconds and 1 minute
}
