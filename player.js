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
  }
}
