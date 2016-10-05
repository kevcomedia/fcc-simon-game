"use strict";

const $ = require("jquery");
const strict = require("./strict");
const sequence = require("./sequence");

$("#start").on("click", function() {
  sequence.reset();
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
  for (let i = 0; i < sequence.getLevel(); i++) {
    let $color = $(`#${sequence.getColorAt(i)}`);
    setTimeout(function() {
      $color.addClass("isActive");
      setTimeout(function() {
        $color.removeClass("isActive");
      }, 500)
    }, i * 1000 + 500);
  }
}
