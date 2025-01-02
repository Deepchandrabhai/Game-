const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const images = [
  { letter: "A", img: "A🍎" },
  { letter: "B", img: "B🏀" },
  { letter: "C", img: "C🐈" },
  { letter: "D", img: "D🐕" },
  { letter: "E", img: "E🥚" },
  { letter: "F", img: "F🐟" },
  { letter: "G", img: "G🍇" },
  { letter: "H", img: "H🏠" },
  { letter: "I", img: "I🍦" },
  { letter: "J", img: "J🏺" },
  { letter: "K", img: "K🪁" },
  { letter: "L", img: "L🦁" },
  { letter: "M", img: "M🐒" },
  { letter: "N", img: "N🥅" },
  { letter: "O", img: "O🍊" },
  { letter: "P", img: "P🦜" },
  { letter: "Q", img: "Q👑" },
  { letter: "R", img: "R🐀" },
  { letter: "S", img: "S🌞" },
  { letter: "T", img: "T🌴" },
  { letter: "U", img: "U☂️" },
  { letter: "V", img: "V🎻" },
  { letter: "W", img: "W⌚" },
  { letter: "X", img: "X🎄" },
  { letter: "Y", img: "Y⛵" },
  { letter: "Z", img: "Z🦓" },
];

let selectedLetter = null;
let matchedPairs = 0;

function setupGame() {
  const lettersContainer = document.getElementById("letters");
  const imagesContainer = document.getElementById("images");

  alphabet.forEach((letter) => {
    const letterDiv = document.createElement("div");
    letterDiv.className = "letter";
    letterDiv.textContent = letter;
    letterDiv.onclick = () => selectLetter(letter);
    lettersContainer.appendChild(letterDiv);
  });

  images.sort(() => Math.random() - 0.5).forEach(({ letter, img }) => {
    const imageDiv = document.createElement("div");
    imageDiv.className = "image";
    imageDiv.textContent = img;
    imageDiv.onclick = () => matchImage(letter);
    imagesContainer.appendChild(imageDiv);
  });
}

function selectLetter(letter) {
  selectedLetter = letter;
}

function matchImage(letter) {
  if (!selectedLetter) return;

  const lettersDiv = document.querySelectorAll(".letter");
  const imagesDiv = document.querySelectorAll(".image");

  if (selectedLetter === letter) {
    matchedPairs++;
    [...lettersDiv].find((div) => div.textContent === letter).classList.add("matched");
    [...imagesDiv].find((div) => div.textContent === images.find((img) => img.letter === letter).img).classList.add("matched");

    if (matchedPairs === alphabet.length) {
      showCongratulations();
    }
  }

  selectedLetter = null;
}

function showCongratulations() {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = "Congratulations! 🎉 You've completed the game!";
  resultDiv.style.display = "block";
  playSound();
}

function playSound() {
  const audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
  audio.play();
}

document.addEventListener("DOMContentLoaded", setupGame);
