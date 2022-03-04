//----------Global Variables----------

// ----------Query Selectors----------
var rulesSection = document.querySelector(".rules-section");
var classicRulesButton = document.querySelector(".classic-rules");
var advancedRulesButton = document.querySelector(".advanced-rules");
var chooseSelectionTitle = document.querySelector(".choose-competitor");
var chooseGameTitle = document.querySelector(".choose-game");
var charactersClassic = document.querySelector(".characters-classic");
var charactersAdvanced = document.querySelector(".characters-advanced");
var changeGameButton = document.querySelector(".change-game-button");

//----------Event Listeners----------
classicRulesButton.addEventListener("click", goToClassicGame);
advancedRulesButton.addEventListener("click", goToAdvancedGame);
changeGameButton.addEventListener("click", returnToHomePage);

//----------Functions----------

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
  hideElement(chooseCompetitorTitle);
  viewElement(chooseGameTitle);
}

function viewElement(element) {
  element.classList.remove("hidden");
}

function hideElement(element) {
  element.classList.add("hidden");
}

//USE CLASSES! Methods in classes? //
//Classic:
// REQUIRED: A timeout is used after a completed game to reset the board.
//G- winner selected from Game
//I- human- chosen selection, computer= random selection
//O- second random function is winner and message stating winner, timer, clear
//S- steps:
//1) human selects either rock, paper or scissors- can click on it to show choice.
//2) computer "picks" from randomly generated function,
//3) selections stored on page ?
//4) another random selection decides winner.
//5) winner displayed on page, a function with several conditionls runs to see whos is the winner, winner is announced on screen, Maybe Announcement on page could remind that paper covers rock for example.
//6) counter for winner gets incremented by one. Repeat
//Q-
