"use strict";

const length = 20;
let sequence = [];

function reset() {
  sequence = [];

  for (let ci = 0; ci < length; ci++) {
    sequence.push(random());
  }

  function random() {
    const colors = ["green", "red", "yellow", "blue"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
}

function get() {
  return sequence.slice();
}

reset();

module.exports = {
  reset, get
};
