class Player {
  constructor(player, token, currentSelection) {
    this.player = name;
    this.token = token || "PIC";
    this.currentSelection = "paper";
    this.winStatus = false;
    this.wins = 0;
    this.gameType = "Classic";
    this.characters = ["rock", "paper", "scissors"];
  }
  incrementWins() {
    if (this.winStatus) {
      this.wins++;
    }
  }
}
var player = new Player({
  name: "Human",
  token: "",
  currentSelection: "paper",
  winStatus: false,
  wins: 0,
  gameType: "Classic",
  characters: ["rock", "paper", "scissors"],
});
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
//Q-
