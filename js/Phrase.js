class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

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

  checkLetter(letter) {
    const phrase = this.phrase.toLowerCase();
    return phrase.includes(letter) ? (this.showLetter(letter), true) : false;
  }

  showLetter(letter) {
    $(`.char-${letter}`).removeClass("hide");
  }
}
