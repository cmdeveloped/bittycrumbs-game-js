class Game {
  constructor(phrases) {
    this.missed = 0;
    this.phrases = phrases;
    this.select = "";
  }

  setPhrase() {
    const phrases = this.phrases;
    let random = Math.floor(Math.random() * phrases.length);
    this.select = phrases[random];

    const letters = $("#bitty");
    for (let char of this.select) {
      let letter = new RegExp(/^[A-Za-z]$/);
      letter.test(char)
        ? letters.append(`<span class="letter hide">${char}</span>`)
        : letters.append(`<span class="character">${char}</span>`);
    }
  }
}
