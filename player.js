class Player {
  constructor(name, token, wins) {
    this.name = name;
    this.token = token;
    this.wins = wins;
  }
  takeTurn() {}
}

var computer = new Player("Computer", token, wins);
