"use strict";

const length = 20;
let sequence = [];
let level = 1;

function reset() {
  sequence = [];
  level = 1;

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
  return sequence.slice(0, level);
}

function increment() {
  level++;
}

// Fill the sequence with values before exporting.
reset();

module.exports = { reset, get, increment };
