"use strict";

const $ = require("jquery");
const sounds = require("./sounds");
const game = require("./game");

const $stepCounter = $(".counter");
const $strict = $("#strict");

$strict.on("change", function() {
  const label = $strict.parent();
  const isStrict = $strict.prop("checked");
  const fn = isStrict ? label.addClass : label.removeClass;
  fn.call(label, "isChecked");
  game.setStrict(isStrict);
});

$("#start").on("click", function() {
  $stepCounter.text("--");
  game.reset();
  $("body").removeClass("victory");
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
    game.incrementStepCount();
    if (game.stepCountEqualsCurrentLevel()) {
      if (game.isMaxLevel()) {
        // good end
        $("body").addClass("victory");
        $stepCounter.text("**");
      }
      else {
        game.incrementCurrentLevel();
        game.clearStepCount();
        animate();
      }
    }
  }
  else {
    game.isStrict() ? game.reset() : game.clearStepCount();
    $stepCounter.text("!!");
    animate({ wrongButtonPressed: true });
  }
});

function animate({ wrongButtonPressed = false } = {}) {
  if (wrongButtonPressed) {
    $("body").addClass("wrongButtonPressed");
  }

  setTimeout(function() {
    $("body").removeClass("wrongButtonPressed");
    $stepCounter.text(game.getCurrentLevel());

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
