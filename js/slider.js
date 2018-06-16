"use strict";

(function () {
    var reviewsList = document.querySelector('.reviews__list');
    var noJS = document.querySelector('.reviews__inner');
    var reviewsItem = document.querySelectorAll('.review');
    var arrowLeft = document.querySelector('#arrow-left');
    var arrowRight = document.querySelector('#arrow-right');
    var width = 100;
    var position = 0;
    var count = 1;

    noJS.classList.remove("reviews__inner--nojs");

    arrowLeft.onclick = function() {
      position = Math.min(position + width * count, 0)
      reviewsList.style.marginLeft = position + '%';
    };

    arrowRight.onclick = function() {
      position = Math.max(position - width * count, -width * (reviewsItem.length - count));
      reviewsList.style.marginLeft = position + '%';
    };
})();
