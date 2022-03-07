//----------Global Variables----------
var game = new Game();
//var choices = ["rock", "paper", "scissors"];

// ----------Query Selectors----------
var rulesSection = document.querySelector(".rules-section");
var rulesButtons = document.querySelector(".rules-buttons");
//var classicRulesButton = document.querySelector(".classic-rules");
//var advancedRulesButton = document.querySelector(".advanced-rules");
var chooseSelectionTitle = document.querySelector(".choose-selection");
var chooseGameTitle = document.querySelector(".choose-game");
var charactersClassic = document.querySelector(".characters-classic");
var charactersAdvanced = document.querySelector(".characters-advanced");
var changeGameButton = document.querySelector(".change-game-button");
var computerDecision = document.getElementById("computerDecision");
var humanDecision = document.getElementById("humanDecision");
var result = document.getElementById("result");

//----------Event Listeners----------
rulesButtons.addEventListener("click", evaluateGameChoice);
//classicRulesButton.addEventListener("click", evaluateGameChoice);
//advancedRulesButton.addEventListener("click", evaluateGameChoice);
changeGameButton.addEventListener("click", returnToHomePage);
console.log(charactersClassic, "cc");
charactersClassic.addEventListener("click", function (event) {
  console.log("GAME", game);
  humanChoice = event.target.id;
  humanDecision.innerHTML = humanChoice;
  console.log("h= " + humanChoice);
  game.human.takeTurn(event);
  game.getComputerChoice();
  game.updatePlayerChoices();
  game.determineWinner();
});

//----------Functions----------

function evaluateGameChoice() {
  console.log(event.target);
  event.preventDefault;
  console.log("EVENTTARGETID", event.target.id);
  var classicButton = event.target.closest("#charactersClassic");
  //bubbling up to closest parent with id towards doc.
  if (classicButton.id === "charactersClassic") {
    game = new Game("Classic");
    console.log(game, "Game instanciated");
    goToClassicGame();
  } else if (event.target.id === "charactersAdvanced") {
    game = new Game("Advanced");
    goToAdvancedGame();
  }
  game.chooseCharacters();
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
  //this.game.type === "Classic"
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
