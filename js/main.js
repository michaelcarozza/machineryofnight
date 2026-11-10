/* Assembles the contact email at runtime so it is not plain text in the page source. */
(function () {
  "use strict";
  var user = ["machinery", "of", "night", "co"].join("");
  var host = ["gmail", "com"].join(".");
  var addr = user + "@" + host;

  var targets = document.querySelectorAll("[data-email]");
  for (var i = 0; i < targets.length; i++) {
    var a = document.createElement("a");
    a.href = "mai" + "lto:" + addr;
    a.textContent = addr;
    targets[i].textContent = "";
    targets[i].appendChild(a);
  }
})();
