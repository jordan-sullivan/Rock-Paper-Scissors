//----------Global Variables----------
var game = new Game();
var choices = ["rock", "paper", "scissors"];

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
classicRulesButton.addEventListener("click", evaluateGameChoice);
advancedRulesButton.addEventListener("click", goToAdvancedGame);
changeGameButton.addEventListener("click", returnToHomePage);

charactersClassic.addEventListener("click", function (event) {
  console.log("GAME", game);
  humanChoice = event.target.id;
  humanDecision.innerHTML = humanChoice;
  console.log("h= " + humanChoice);
  game.human.takeTurn();
  game.getComputerChoice(type);
  game.updatePlayerChoices();
  game.determineWinner();
});

//----------Functions----------

function evaluateGameChoice() {
  event.preventDefault;
  console.log("EVENTTARGETID", event.target.id);
  if (event.target.id === "charactersClassic") {
    console.log("this works til 43");
    game = new Game("Classic");
    goToClassicGame();
  } else if (event.target.id === "charactersAdvanced") {
    game = new Game("Advanced");
    goToAdvancedGame();
  }
}
// function getComputerChoice() {
//   var computerChoice =
//     classicChoices[Math.floor(Math.random() * classicChoices.length)];
//   computerDecision.innerHTML = computerChoice;
//
// }

function goToClassicGame() {
  viewElement(chooseSelectionTitle);
  hideElement(chooseGameTitle);
  hideElement(rulesSection);
  viewElement(charactersClassic);
  viewElement(changeGameButton);
  //evaluateGameChoice();
}
function goToAdvancedGame() {
  goToClassicGame();
  viewElement(charactersAdvanced);
  //evaluateGameChoice();
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
