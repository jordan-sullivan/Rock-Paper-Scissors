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
    console.log(this.characters);
    console.log(Math.floor(Math.random() * this.characters.length));
    this.computerDecision = this.characters[
      Math.floor(Math.random() * this.characters.length)
    ];
    console.log("c= " + this.computerDecision);
  }
  updatePlayerChoices() {
    this.humanDecision = this.human.currentSelection;
  }
  determineWinner() {
    if (this.humanDecision === this.computerDecision) {
      return "It's a tie!";
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
      this.human.wins += 1;
      result = "Human Wins!"; //in HTML- heading 2
    } else {
      this.computer.wins += 1;
      result = "Computer wins!";
    }
  }
}
//icons created by Freepik - Flaticon
