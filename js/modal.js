"use strict";

(function () {
  var orderBtn = document.querySelector("#order");
  var addBtn = document.querySelector(".modal__btn");
  var orderLink = document.querySelector("#alt-link");
  var modal = document.querySelector(".modal");
  var filter = document.querySelector(".filter");

  orderLink.classList.add("hidden");
  orderBtn.classList.remove("hidden");

  orderBtn.addEventListener("click", function() {
    if (modal.classList.contains("hidden")) {
      modal.classList.remove("hidden");
      filter.classList.remove("hidden");
    }
  })

  addBtn.addEventListener("click", function() {
    modal.classList.add("hidden");
    filter.classList.add("hidden");
  })

  window.addEventListener("keyup", function(evt) {
    if (evt.keyCode === 27) {
      modal.classList.add("hidden");
      filter.classList.add("hidden");
    }
  })
})();
