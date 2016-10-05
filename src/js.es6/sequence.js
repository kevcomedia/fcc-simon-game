"use strict";

const maxLevel = 20;
let sequence = [];
let level = 1;

function reset() {
  sequence = [];
  level = 1;

  for (let ci = 0; ci < maxLevel; ci++) {
    sequence.push(random());
  }

  function random() {
    const colors = ["green", "red", "yellow", "blue"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
}

function getSequence() {
  return sequence.slice(0, level);
}

// We could probably guard against trying to get sequence[index]
// for any index >= level and index < 0.
function getColorAt(index) {
  return sequence[index];
}

function getLevel() {
  return level;
}

function increment() {
  level++;
}

// Fill the sequence with values before exporting.
reset();

module.exports = { reset, getSequence, getColorAt, getLevel, increment };
