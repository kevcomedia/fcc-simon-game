"use strict";

const maxLevel = 20;
let sequence = [];
let level = 1;
let index = 0;

const functions = {
  reset() {
    sequence = [];
    level = 1;
    index = 0;

    for (let ci = 0; ci < maxLevel; ci++) {
      sequence.push(random());
    }

    function random() {
      const colors = ["green", "red", "yellow", "blue"];
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    }
  },

  getSequence() {
    return sequence.slice(0, level);
  },

  // We could probably guard against trying to get sequence[index]
  // for any index >= level and index < 0.
  getColorAt(i) {
    return sequence[i];
  },

  getLevel() {
    return level;
  },

  increment() {
    level++;
  }
};

// Fill the sequence with values before exporting.
functions.reset();

module.exports = functions;
