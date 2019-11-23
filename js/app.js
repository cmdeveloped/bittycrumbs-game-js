/*
The Bitty Crumbs idiom matching game
Author: Collin Smith
*/

const initKeyboard = () => {
  const crumbs = $("#crumbs");
  let keys = "../data/keys.json";
  let keyboard = "";

  $.getJSON(keys, data => {
    keys = Object.keys(data);
    for (let row of keys) {
      keyboard += `<div class="${row}">`;
      for (let key of data[row]) {
        keyboard += `<button type="button" class="key" value="${key}">${key}</button>`;
      }
      keyboard += `</div>`;
    }
    crumbs.append(keyboard);
  });
};

let phrases = "../data/phrases.json";
const loadPhrases = () => {
  $.getJSON(phrases, data => {
    phrases = data;
  });
};

let game;
$(document).ready(() => {
  initKeyboard();
  loadPhrases();

  $("button[name=start]").on("click", () => {
    game = new Game(phrases);
    game.setPhrase();
  });
});
