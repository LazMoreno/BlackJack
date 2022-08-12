class GeneralPlayer {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.totalScore = 0
  }

  getCard(card) {
    this.hand.push(card);
  }

  hit(card) {
    this.hand.push(card);
  }
}



class Player extends GeneralPlayer {
  constructor(name, assets) {
    super(name)
    this.totalAssets = assets;
  }
}




class Dealer extends GeneralPlayer {
  constructor(numberOfDecks) {
    super();
    this.name = 'Dealer';
    this.numberOfDecks = numberOfDecks
    this.cardsInTotalDeck = []
    this.deckSuites = ['H', 'C', "D", "S"]
    this.deckValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    this.generateDecks();
  }

  generateDecks() {
    for (let i = 0; i < this.numberOfDecks; i++) {
      this.deckSuites.forEach(suite => {
        this.deckValues.forEach(value => {
          this.cardsInTotalDeck.push(new Card(suite, value))
        })
      })
    }
  }

  dealerHit() {
    if (Math.floor(Math.random() * 50) % 3 === 0 && totalScore < 17) {
      this.hit(this.cardsInTotalDeck[0])
    }
  }

}