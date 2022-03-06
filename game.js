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

  tieGame() {
    if (this.humanSelection === this.computerSelection) {
      return true;
    }
  }

  playGame() {
    if (tieGame()) {
      return false;
    } else if (
      (this.humanSelection === "rock" &&
        this.computerSelection === "scissors") ||
      (this.humanSelection === "paper" && this.computerSelection === "rock") ||
      (this.humanSelection === "scissors" &&
        this.computerSelection === "paper") ||
      (this.humanSelection === "rock" &&
        this.computerSelection === "unicorn") ||
      (this.humanSelection === "paper" &&
        this.computerSelection === "dolphin") ||
      (this.humanSelection === "scissors" &&
        this.computerSelection === "unicorn") ||
      (this.humanSelection === "unicorn" &&
        this.computerSelection === "paper") ||
      (this.humanSelection === "unicorn" &&
        this.computerSelection === "dolphin") ||
      (this.humanSelection === "dolphin" &&
        this.computerSelection === "scissors") ||
      (this.humanSelection === "dolphin" && this.computerSelection === "rock")
    ) {
      this.human.wins += 1;
    } else {
      this.computer.wins += 1;
    }
  }
}

//icons created by Freepik - Flaticon
