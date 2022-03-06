//----------Global Variables----------
var game = new Game();

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
charactersClassic.addEventListener("click", function (event) {
  takeTurn(event);
});

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
