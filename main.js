//----------Global Variables----------

// A timeout is used after a completed game to reset the board.

// ----------Query Selectors----------
var rulesSection = document.querySelector(".rules-section");
var classicRulesButton = document.querySelector(".classic-rules");
var advancedRulesButton = document.querySelector(".advanced-rules");
var chooseCompetitorTitle = document.querySelector(".choose-competitor");
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
  viewElement(chooseCompetitorTitle);
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

// assign the "Click Me" string to the btn. innerHTML property.
// use document. body. appendChild() to append the button element to the <body> tag.

function viewElement(element) {
  element.classList.remove("hidden");
}

function hideElement(element) {
  element.classList.add("hidden");
}
// <a href="https://www.flaticon.com/free-icons/scissors" title="scissors icons">Scissors icons created by Freepik - Flaticon</a>
// //Scissors
// <a href="https://www.flaticon.com/free-icons/paper-plane" title="paper plane icons">Paper plane icons created by Freepik - Flaticon</a>
// //Paper
// <a href="https://www.flaticon.com/free-icons/monitor" title="monitor icons">Monitor icons created by Freepik - Flaticon</a>
// //Computer
// <a href="https://www.flaticon.com/free-icons/unicorn" title="unicorn icons">Unicorn icons created by Freepik - Flaticon</a>
// //Unicorn
// <a href="https://www.flaticon.com/free-icons/flower" title="flower icons">Flower icons created by Freepik - Flaticon</a>
// //Human
// <a href="https://www.flaticon.com/free-icons/dolphin" title="dolphin icons">Dolphin icons created by Freepik - Flaticon</a>
// //dolphin
// <a href="https://www.flaticon.com/free-icons/jewelery" title="jewelery icons">Jewelery icons created by Freepik - Flaticon</a>
// //rock
