class Game {
  constructor(type, humanSelection, computerSelection, winner) {
    this.type = type || "Classic";
    this.characters = [];
    this.human = new Player("Human", "🙋🏼‍♀️");
    this.computer = new Player("Computer", "💻");
    this.humanDecision = humanDecision;
    this.computerDecision = computerDecision;
    this.isTie = false;
    this.winner = winner;
  }

  chooseGame() {
    if (this.type === "Classic") {
      this.characters = ["rock", "paper", "scissors"];
      playClassicGame();
    } else if (this.type === "Advanced") {
      this.characters = ["rock", "paper", "scissors", "dolphin", "unicorn"];
      playAdvancedGame();
    }
  }
}

//icons created by Freepik - Flaticon
