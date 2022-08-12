//console.log("Hello World")


class Game {
  constructor(tableName, playersArray, numberOfDecks) {
    this.players = [];
    this.tableName = tableName
    this.howManyPlayers = playersArray
    this.numberOfDecks = numberOfDecks
    this.generatePlayers()
  }

  generatePlayers() {
    this.howManyPlayers.forEach(player => {
      this.players.push(player.toLowerCase() === 'dealer' ? new Dealer(this.numberOfDecks) : new Player(player, 1000))
    })
  }

  addPlayer(playerName) {
    this.players.push(new Player(playerName, 1000))
  }


}