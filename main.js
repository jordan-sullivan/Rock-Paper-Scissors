//----------Global Variables----------
var game = new Game();

// ----------Query Selectors----------
var rulesSection = document.querySelector(".rules-section");
var rulesButtons = document.querySelector(".rules-buttons");
var classicRulesButton = document.querySelector(".classic-rules");
var advancedRulesButton = document.querySelector(".advanced-rules");
var chooseSelectionTitle = document.querySelector(".choose-selection");
var chooseGameTitle = document.querySelector(".choose-game");
var displayResults = document.querySelector(".display-results");

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
charactersClassic.addEventListener("click", function (event) {
  game.human.takeTurn(event);
  game.getComputerChoice();
  game.updatePlayerChoices();
  game.determineWinner();
});
charactersAdvanced.addEventListener("click", function (event) {
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
  hideElement(displayResults);
  hideElement(result);
  viewElement(chooseSelectionTitle);
  hideElement(chooseGameTitle);
  hideElement(rulesSection);
  viewElement(charactersClassic);
  viewElement(changeGameButton);
  game.chooseCharacters();
}

function goToAdvancedGame() {
  game.type = "Advanced";
  hideElement(displayResults);
  hideElement(result);
  viewElement(chooseSelectionTitle);
  hideElement(chooseGameTitle);
  hideElement(rulesSection);
  viewElement(charactersClassic);
  viewElement(changeGameButton);
  viewElement(charactersAdvanced);
  game.chooseCharacters();
}

function viewPicks(humanDecision, computerDecision) {
  hideElement(chooseSelectionTitle);
  viewElement(displayResults);
  hideElement(charactersClassic);
  hideElement(charactersAdvanced);

  displayResults.innerHTML = "";
  displayResults.innerHTML += `
  <section class="pick humanDecision" id="humanDecision">
      <img id=${humanDecision} src='./icons/${humanDecision}.png' alt='${humanDecision} icon'>
    </section>
    <section class="pick computerDecision" id="computerDecision">
      <img id=${computerDecision} src='./icons/${computerDecision}.png' alt='${computerDecision} icon'>
    </section>
  `;
  console.log(humanDecision);
  console.log(computerDecision);
  displayWinner();
}

function displayWinner() {
  viewElement(result);
  if (game.winner === "Human") {
    game.human.wins += 1;
    result.innerText = " 🙋🏼‍♀️ HUMAN WINS! 🙋🏼‍♀️ ";
    humanWins.innerHTML = "wins: " + game.human.wins;
  } else if (game.winner === "Computer") {
    game.computer.wins += 1;
    result.innerText = " 🖥 COMPUTER WINS! 🖥 ";
    computerWins.innerHTML = "wins: " + game.computer.wins;
  } else {
    game.winner = "tie";
    result.innerText = " 🪢 TIE GAME! 🪢 ";
  }
  hideElement(charactersClassic);
  hideElement(charactersAdvanced);
  returnToGame();
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
