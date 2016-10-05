"use strict";

const $ = require("jquery");
const strict = require("./strict");
const game = require("./game");

$("#start").on("click", function() {
  game.reset();
  $(".color").removeClass("isActive");
  animate();
});

$(".color").on("mousedown", function() {
  $(this).addClass("isActive");
});

$(".color").on("mouseup", function() {
  $(this).removeClass("isActive");
});

function animate() {
  for (let i = 0; i < game.getLevel(); i++) {
    let $color = $(`#${game.getColorAt(i)}`);
    setTimeout(function() {
      $color.addClass("isActive");
      setTimeout(function() {
        $color.removeClass("isActive");
      }, 500)
    }, i * 1000 + 500);
  }
}
