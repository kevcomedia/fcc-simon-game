const $ = require("jquery");

const strict = $("#strict");

strict.on("change", function() {
  "use strict";
  const label = strict.parent();
  const fn = strict.prop("checked") ? label.addClass : label.removeClass;
  fn.call(label, "isChecked");
});
