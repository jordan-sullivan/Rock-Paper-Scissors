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
    //log crrent selection in here instead
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

//console.log(player);
//should be able to take a turn by clicking on  an image. image will store to current.selection.
// var human = new Player("Human", wins);
// var computer = new Player("Computer", wins);
//  if (computer.currentSelection === human.currentSelection) {
//    return "It's a tie!"
//  } else if (ldghdghdjkgdkgh)

//USE CLASSES! Methods in classes? //
//Classic:
// REQUIRED: A timeout is used after a completed game to reset the board.
//G- winner selected from Game
//I- human- chosen selection, computer= random selectionfunction getRandomColor() {

//O- second random function is winner and message stating winner, timer, clear
//S- steps:

//-want to be able to click on icon and have it store to a variable or property? or as a new instanciation of a game? to then compare with randmom selection from computer... then pause... then the conditional selects the winner
//2) computer "picks" from randomly generated function,
//3) selections stored on page ?
//4) logic conditional decides winner . if human wins, display message, increment , and refresh game after timer
//5) winner displayed on page, a function with several conditionls runs to see whos is the winner, winner is announced on screen, Maybe Announcement on page could remind that paper covers rock for example.
//6) counter for winner gets incremented by one. Repeat
//Q-saveWinsToStorage - only necessary if you choose the localStorage extension
//retrieveWinsFromStorage - only necessary if you choose the localStorage extension
//takeTurn
