//----------Global Variables----------
var game = new Game();

// ----------Query Selectors----------
var rulesSection = document.querySelector(".rules-section");
var rulesButtons = document.querySelector(".rules-buttons");
var classicRulesButton = document.querySelector(".classic-rules");
var advancedRulesButton = document.querySelector(".advanced-rules");
var chooseSelectionTitle = document.querySelector(".choose-selection");
var chooseGameTitle = document.querySelector(".choose-game");
var charactersClassic = document.querySelector(".characters-classic");
var charactersAdvanced = document.querySelector(".characters-advanced");
var changeGameButton = document.querySelector(".change-game-button");
var computerDecision = document.getElementById("computerDecision");
var humanDecision = document.getElementById("humanDecision");
var result = document.querySelector(".result");
var computerWins = document.querySelector(".computer-wins");
var humanWins = document.querySelector(".human-wins");

//----------Event Listeners----------
classicRulesButton.addEventListener("click", goToClassicGame);
advancedRulesButton.addEventListener("click", goToAdvancedGame);
changeGameButton.addEventListener("click", returnToHomePage);
charactersClassic.addEventListener("click", function (event) {
  console.log(" 26 GAME", game);
  humanChoice = event.target.id;
  humanDecision.innerHTML = humanChoice;
  console.log("h decision classic= ", humanChoice);
  game.human.takeTurn(event);
  game.getComputerChoice();
  game.updatePlayerChoices();
  game.determineWinner();
});
charactersAdvanced.addEventListener("click", function (event) {
  humanChoice = event.target.id;
  console.log("h decision, advanced= ", humanChoice);
  game.human.takeTurn(event);
  game.getComputerChoice();
  game.updatePlayerChoices();
  game.determineWinner();
});

//----------Functions----------

function goToClassicGame() {
  game.type = "Classic";
  viewElement(chooseSelectionTitle);
  hideElement(chooseGameTitle);
  hideElement(rulesSection);
  viewElement(charactersClassic);
  viewElement(changeGameButton);
  game.chooseCharacters();
}

function goToAdvancedGame() {
  game.type = "Advanced";
  viewElement(chooseSelectionTitle);
  hideElement(chooseGameTitle);
  hideElement(rulesSection);
  viewElement(charactersClassic);
  viewElement(changeGameButton);
  //goToClassicGame();
  //is there a way to consolodate without declaring this game as classic?
  viewElement(charactersAdvanced);
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
