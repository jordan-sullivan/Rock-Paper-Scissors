//----------Global Variables----------
var game = new Game();

// ----------Query Selectors----------
var rulesSection = document.querySelector(".rules-section");
var rulesButtons = document.querySelector(".rules-buttons");
var classicRulesButton = document.querySelector(".classic-rules");
var advancedRulesButton = document.querySelector(".advanced-rules");
var resetScoreButton = document.querySelector(".reset-score-button");
var chooseSelectionTitle = document.querySelector(".choose-selection");
var chooseGameTitle = document.querySelector(".choose-game");

var charactersClassic = document.querySelector(".characters-classic");
var charactersAdvanced = document.querySelector(".characters-advanced");
var icon = document.querySelector(".icon");
var changeGameButton = document.querySelector(".change-game-button");
var computerDecision = document.getElementById("computerDecision");
var humanDecision = document.getElementById("humanDecision");
var result = document.querySelector(".result");
var computerWins = document.querySelector(".computer-wins");
var humanWins = document.querySelector(".human-wins");
var humanPick = document.querySelector(".human-pick");
var computerPick = document.querySelector(".computer-pick");
//----------Event Listeners----------
classicRulesButton.addEventListener("click", goToClassicGame);
advancedRulesButton.addEventListener("click", goToAdvancedGame);
changeGameButton.addEventListener("click", returnToHomePage);
//resetScoreButton.addEventListener("click", resetScore);
charactersClassic.addEventListener("click", function (event) {
  //humanChoice = event.target.id;
  //humanDecision.innerHTML = humanChoice;
  //console.log("h decision classic= ", humanChoice);
  game.human.takeTurn(event);
  game.getComputerChoice();
  game.updatePlayerChoices();
  game.determineWinner();
});
charactersAdvanced.addEventListener("click", function (event) {
  //humanChoice = event.target.id;
  //console.log("h decision, advanced= ", humanChoice);
  game.human.takeTurn(event);
  game.getComputerChoice();
  game.updatePlayerChoices();
  game.determineWinner();
});

//----------Functions----------

function returnToGame() {
  if (game.type === "Classic") {
    setTimeout(goToClassicGame, 2500);
  } else {
    setTimeout(goToAdvancedGame, 2500);
  }
}

function goToClassicGame() {
  game.type = "Classic";
  hideElement(result);
  viewElement(chooseSelectionTitle);
  hideElement(chooseGameTitle);
  hideElement(rulesSection);
  viewElement(charactersClassic);
  viewElement(changeGameButton);
  viewElement(resetScoreButton);
  game.chooseCharacters();
}

function goToAdvancedGame() {
  game.type = "Advanced";
  hideElement(result);
  viewElement(chooseSelectionTitle);
  hideElement(chooseGameTitle);
  hideElement(rulesSection);
  viewElement(charactersClassic);
  viewElement(changeGameButton);
  viewElement(charactersAdvanced);
  viewElement(resetScoreButton);
  game.chooseCharacters();
}

function returnToHomePage() {
  event.preventDefault;
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
// function resetScore() {
//   person.wins = 0;
//   // humanWins.innerHTML = "wins: " + human.wins;
//   // computerWins.innerHTML = "wins: " + computer.wins;
// }
