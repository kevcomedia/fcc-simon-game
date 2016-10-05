"use strict";

const maxLevel = 20;
let sequence = [];
let level = 1;
let index = 0;

const functions = {
  // `color` must be in the set { "green", "red", "yellow", "blue" }
  matchesCurrentColor(color) {
    return sequence[index] == color;
  },

  incrementStepCount() {
    index++;
  },

  incrementCurrentLevel() {
    level++;
  },

  stepCountEqualsCurrentLevel() {
    return index === level;
  },

  isMaxLevel() {
    return level == maxLevel;
  },

  clearStepCount() {
    index = 0;
  },

  getCurrentLevel() {
    return level;
  },

  getColorAt(i) {
    return sequence[i];
  },

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
};

// Fill the sequence with values before exporting.
functions.reset();

module.exports = functions;
