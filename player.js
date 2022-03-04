class Player {
  constructor(name, token, wins) {
    this.name = name;
    this.token = token;
    this.wins = wins;
  }
  takeTurn() {}
}
var human = new Player("Human", token, wins);
var computer = new Player("Computer", token, wins);
