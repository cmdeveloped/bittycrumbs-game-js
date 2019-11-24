/*
 * Phrase Class
 * `startGame`, `getRandomPhrase`, `keyPress`, `checkWin`, `removeLife`, `gameOver`
 */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

  /*
   * addPhraseToDom should add all necessary word components to the DOM
   */
  addPhraseToDom() {
    const phrase = $("#bitty").empty();
    const words = this.phrase.split(" ");
    for (let word of words) {
      let letters = "";
      for (let char of word) {
        let letter = new RegExp(/^[A-Za-z]$/);
        char = char.toLowerCase();
        letter.test(char)
          ? (letters += `<span class="letter hide char-${char}">${char}</span>`)
          : (letters += `<span class="character">${char}</span>`);
      }
      phrase.append(`<div class="word">${letters}</div>`);
    }
  }

  /*
   * checkLetter should check to see if the selected phrase contains the letter selected
   * if letter selected is found within the phrase, show letter
   */
  checkLetter(letter) {
    const phrase = this.phrase.toLowerCase();
    return phrase.includes(letter) ? (this.showLetter(letter), true) : false;
  }

  /*
   * showLetter should remove any hidden styling on the letter
   */
  showLetter(letter) {
    $(`.char-${letter}`).removeClass("hide");
  }
}
