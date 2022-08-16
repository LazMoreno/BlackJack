class Card {
  constructor(suite, value) {
    this.suite = suite;
    this.value = value;
    this.cardImage = "";
    this.score = 0;
    this.createCard();
  }

  createCard() {
    this.cardImage = `${this.suite}${this.value}.png`;
    this.addScore();
  }

  addScore() {
    this.score = !["J", "Q", "K", "A"].includes(this.value)
      ? Number(this.value)
      : !["J", "Q", "K"].includes(this.value)
      ? 11
      : !["A"].includes(this.value)
      ? 10
      : 11;
  }
}
