class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;

    this.currentSelection;
    this.gameType = "Classic";
    this.characters = ["rock", "paper", "scissors"];
  }

  takeTurn(event) {
    console.log("take turn", event);
    this.currentSelection = event.target.id;
    //humanPick.style.content = "url(./icons/scissors.png)";
    //humanPick.innerText = this.currentSelection;
    //humanPick.classList.add(this.currentSelection);
    //`url(./icons/${icon}.png)`;
    //computerPick.style.content = "url(./icons/paper-plane.png)";
    //`url(./icons/${icon}.png)`;
  } //id].style.content = "url(./images/unlocked.png)";
}
