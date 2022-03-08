class Game {
  constructor(type) {
    this.type = type;
    this.characters = [];
    this.human = new Player("Human", "🙋🏼‍♀️");
    this.computer = new Player("Computer", "💻");
    this.humanDecision = humanDecision;
    this.computerDecision = computerDecision;
    this.winner;
  }
  chooseCharacters() {
    if (this.type === "Classic") {
      this.characters = ["rock", "paper", "scissors"];
    } else if (this.type === "Advanced") {
      this.characters = ["rock", "paper", "scissors", "dolphin", "unicorn"];
    }
  }
  getComputerChoice() {
    this.computerDecision = this.characters[
      Math.floor(Math.random() * this.characters.length)
    ];
  }
  updatePlayerChoices() {
    this.humanDecision = this.human.currentSelection;
  }
  determineWinner() {
    if (this.humanDecision === this.computerDecision) {
      this.winner = "tie";
    } else if (
      (this.humanDecision === "rock" && this.computerDecision === "scissors") ||
      (this.humanDecision === "paper" && this.computerDecision === "rock") ||
      (this.humanDecision === "scissors" &&
        this.computerDecision === "paper") ||
      (this.humanDecision === "rock" && this.computerDecision === "unicorn") ||
      (this.humanDecision === "paper" && this.computerDecision === "dolphin") ||
      (this.humanDecision === "scissors" &&
        this.computerDecision === "unicorn") ||
      (this.humanDecision === "unicorn" && this.computerDecision === "paper") ||
      (this.humanDecision === "unicorn" &&
        this.computerDecision === "dolphin") ||
      (this.humanDecision === "dolphin" &&
        this.computerDecision === "scissors") ||
      (this.humanDecision === "dolphin" && this.computerDecision === "rock")
    ) {
      this.winner = "Human";
    } else {
      this.winner = "Computer";
    }
    viewPicks(this.humanDecision, this.computerDecision);
  }
}
//icons created by Freepik - Flaticon
