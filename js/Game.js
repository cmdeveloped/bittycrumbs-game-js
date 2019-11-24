/*
 * Game Class is where the top level functions should live
 * `startGame`, `getRandomPhrase`, `keyPress`, `checkWin`, `removeLife`, `gameOver`
 */
class Game {
  constructor(phrases) {
    this.missed = 0;
    this.phrases = phrases;
    this.selected = null;
  }

  /*
   * startGame should get a random phrase, instantiate new phrase class,
   * and add the selected phrase to the DOM.
   */
  startGame() {
    let selected = this.getRandomPhrase();
    console.log(selected);
    let phrase = new Phrase(selected);
    this.selected = phrase;
    phrase.addPhraseToDom();
  }

  /*
   * getRandomPhrase should select a random phrase from our phrases
   */
  getRandomPhrase() {
    const phrases = this.phrases;
    let random = Math.floor(Math.random() * phrases.length);
    return phrases[random];
  }

  /*
   * handleInteraction should handle the keyboard press and check letter
   * check for a win if the letter is in the phrase, else remove a life
   */
  handleInteraction(letter) {
    const phrase = this.selected;
    let check = phrase.checkLetter(letter);
    check ? this.checkWin() : this.removeLife();
  }

  /*
   * checkWin should find all hidden letters, if there are still hidden letters
   * if there are no hidden letters left, you win!
   */
  checkWin() {
    let hidden = $(".letter.hide");
    !hidden.length ? gameOver(true) : false;
  }

  /*
   * removeLife should remove a life from the screen
   */
  removeLife() {}

  /*
   * gameOver should be called when a user wins or loses
   */
  gameOver(winner) {
    winner ? alert("you win") : alert("you lose");
  }
}
