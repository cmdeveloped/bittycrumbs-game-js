/*
The Bitty Crumbs idiom matching game
Author: Collin Smith
*/

// load keys from json and create keyboard
const initKeyboard = () => {
  const crumbs = $("#crumbs");
  let keys = "../data/keys.json";
  let keyboard = "";

  $.getJSON(keys, data => {
    keys = Object.keys(data);
    for (let row of keys) {
      keyboard += `<div class="${row}">`;
      for (let key of data[row]) {
        keyboard += `<button type="button" class="key secondary" value="${key}">${key}</button>`;
      }
      keyboard += `</div>`;
    }
    crumbs.append(keyboard);
  });
};

// load phrases from json data
let phrases = "../data/phrases.json";
const loadPhrases = () => {
  $.getJSON(phrases, data => {
    phrases = data;
  });
};

let game;
$(document).ready(() => {
  // init functions
  initKeyboard();
  loadPhrases();
  // start game action
  $("button[name=start]").on("click", () => {
    $("#splash").hide();
    game = new Game(phrases);
    game.startGame();
  });
  // replay game action
  $("button[name=replay]").on("click", () => {
    game = new Game(phrases);
    game.startGame();
    $("#results").hide();
  });
  // bind dynamically added button action
  $("#crumbs").on("click", ".key", e => {
    let letter = e.target.value;
    game.handleInteraction(letter);
  });
});
