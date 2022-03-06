//----------Global Variables----------
var game = new Game();
var classicChoices = ["rock", "paper", "scissors"];

// ----------Query Selectors----------
var rulesSection = document.querySelector(".rules-section");
var classicRulesButton = document.querySelector(".classic-rules");
var advancedRulesButton = document.querySelector(".advanced-rules");
var chooseSelectionTitle = document.querySelector(".choose-selection");
var chooseGameTitle = document.querySelector(".choose-game");
var charactersClassic = document.querySelector(".characters-classic");
var charactersAdvanced = document.querySelector(".characters-advanced");
var changeGameButton = document.querySelector(".change-game-button");
var computerDecision = document.getElementById("computerDecision");
var humanDecision = document.getElementById("humanDecision");
var result = document.getElementById("result");

//----------Event Listeners----------
classicRulesButton.addEventListener("click", goToClassicGame);
advancedRulesButton.addEventListener("click", goToAdvancedGame);
changeGameButton.addEventListener("click", returnToHomePage);
charactersClassic.addEventListener("click", function (event) {
  humanChoice = event.target.id;
  humanDecision.innerHTML = humanChoice;
  console.log("h= " + humanChoice);
  getRandomCharacter();
  playGame();
});

//----------Functions----------
function getRandomCharacter() {
  var computerChoice =
    classicChoices[Math.floor(Math.random() * classicChoices.length)];
  computerDecision.innerHTML = computerChoice;
  console.log("c= " + computerChoice);
}

function playGame() {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "rock" && computerChoice === "unicorn") ||
    (humanChoice === "paper" && computerChoice === "dolphin") ||
    (humanChoice === "scissors" && computerChoice === "unicorn") ||
    (humanChoice === "unicorn" && computerChoice === "paper") ||
    (humanChoice === "unicorn" && computerChoice === "dolphin") ||
    (humanChoice === "dolphin" && computerChoice === "scissors") ||
    (humanChoice === "dolphin" && computerChoice === "rock")
  ) {
    //this.human.wins += 1;
    result = "Human Wins!";
  } else {
    //this.computer.wins += 1;
    result = "Computer wins!";
  }
}

function goToClassicGame() {
  viewElement(chooseSelectionTitle);
  hideElement(chooseGameTitle);
  hideElement(rulesSection);
  viewElement(charactersClassic);
  viewElement(changeGameButton);
}
function goToAdvancedGame() {
  goToClassicGame();
  viewElement(charactersAdvanced);
}
function returnToHomePage() {
  hideElement(changeGameButton);
  hideElement(charactersClassic);
  hideElement(charactersAdvanced);
  viewElement(rulesSection);
  hideElement(chooseSelectionTitle);
  viewElement(chooseGameTitle);
}

function viewElement(element) {
  element.classList.remove("hidden");
}

function hideElement(element) {
  element.classList.add("hidden");
}
function takeTurn(event) {
  if (event.target.id === "rock") {
    game.humanSelection = "rock";
  } else if (event.target.id === "paper") {
    game.humanSelection = "paper";
  } else if (event.target.id === "scissors") {
    game.humanSelection = "scissors";
    charactersClassic.innerHTML += `
  <img id="rock" src="./icons/ring.png" alt="diamond ring icon">
  <img id="paper" src="./icons/paper-plane.png"
  alt="paper icon">
  <img id="scissors" src="./icons/scissors.png" alt="scissors icon">`;
  }
}
//1) human selects either rock, paper or scissors- can click on it to show choice.

//-event target to click on icons? or make into buttons? that selection gets stored temporoarily...where?
