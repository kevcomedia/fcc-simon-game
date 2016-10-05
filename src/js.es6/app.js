"use strict";

const $ = require("jquery");
const strict = require("./strict");
const sounds = require("./sounds");
const game = require("./game");

$("#start").on("click", function() {
  game.reset();
  $(".color").removeClass("isActive");
  animate();
});

$(".color").on("mousedown", function() {
  $(this).addClass("isActive");
  sounds.play($(this).data("color"));
});

$(".color").on("mouseup", function() {
  $(this).removeClass("isActive");
});

$(".color").on("click", function() {
  const color = $(this).data("color");
  if (game.matchesCurrentColor(color)) {
    game.incrementCorrectCount();
    if (game.correctCountEqualsCurrentLevel()) {
      if (game.isMaxLevel()) {
        // good end
        alert("Yay!");
      }
      else {
        game.incrementCurrentLevel();
        game.clearCorrectCount();
        animate();
      }
    }
  }
  else {
    /* flash red color */
    /* if strict mode is on, reset game */
    /* else, reset correct count */
    game.clearCorrectCount();
    animate();
  }
});

function animate() {
  setTimeout(function() {
    for (let i = 0; i < game.getCurrentLevel(); i++) {
      let color = game.getColorAt(i);
      let $color = $(`#${color}`);
      setTimeout(function() {
        sounds.play(color);
        $color.addClass("isActive");
        setTimeout(function() {
          $color.removeClass("isActive");
        }, 500);
      }, i * 1000 + 500);
    }
  }, 500);
}
