/*
Game Class is where the top level functions should live
`startGame`, `getRandomPhrase`, `keyPress`, `checkWin`, `removeLife`, `gameOver`
*/
class Game {
  constructor(phrases) {
    this.missed = 0;
    this.phrases = phrases;
    this.selected = null;
  }

  startGame() {
    let selected = this.getRandomPhrase();
    console.log(selected);
    let phrase = new Phrase(selected);
    this.selected = phrase;
    phrase.addPhraseToDom();
  }

  getRandomPhrase() {
    const phrases = this.phrases;
    let random = Math.floor(Math.random() * phrases.length);
    return phrases[random];
  }

  handleInteraction(letter) {
    const phrase = this.selected;
    let check = phrase.checkLetter(letter);
    check ? this.checkWin() : this.removeLife();
  }

  checkWin() {
    let hidden = $(".letter.hide");
    console.log(hidden.length);
    !hidden.length ? alert("you won") : alert("keep going");
  }

  removeLife() {}

  gameOver() {}
}
