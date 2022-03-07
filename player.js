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
    if (event.target.id === "rock") {
      this.currentSelection = "rock";
    } else if (event.target.id === "paper") {
      this.currentSelection = "paper";
    } else if (event.target.id === "scissors") {
      this.currentSelection = "scissors";
    }
    // }
    // incrementWins() {
    //   if (this.winStatus) {
    //     this.wins++;
    //   }
    // }
  }
}
