"use strict";

(function () {
    var slider = document.querySelector('.reviews__list');
    var reviewsItem = document.querySelectorAll('.review');
    var arrowLeft = document.querySelector('#reviews-arrow-left');
    var arrowRight = document.querySelector('#reviews-arrow-right');
    var width = 100;
    var position = 0;
    var count = 1;
    var toggle1 = document.querySelector('#review-toggle-1');
    var toggle2 = document.querySelector('#review-toggle-2');
    var toggle3 = document.querySelector('#review-toggle-3');

    if (slider.classList.contains('reviews__list--nojs')) {
        slider.classList.remove('reviews__list--nojs');
    }


    arrowLeft.onclick = function() {
      position = Math.min(position + width * count, 0)
      reviewsList.style.marginLeft = position + '%';
    };

    arrowRight.onclick = function() {
      position = Math.max(position - width * count, -width * (reviewsItem.length - count));
      reviewsList.style.marginLeft = position + '%';
    };

    toggle1.onclick = function() {
      toggle2.classList.remove('reviews__toggle--active');
      toggle3.classList.remove('reviews__toggle--active');
      toggle1.classList.add('reviews__toggle--active');
      slider.style.left = 0;
    };

    toggle2.onclick = function() {
      toggle1.classList.remove('reviews__toggle--active');
      toggle3.classList.remove('reviews__toggle--active');
      toggle2.classList.add('reviews__toggle--active');
      slider.style.left = '-100%';
    };

    toggle3.onclick = function() {
      toggle1.classList.remove('reviews__toggle--active');
      toggle2.classList.remove('reviews__toggle--active');
      toggle3.classList.add('reviews__toggle--active');
      slider.style.left = '-200%';
    };
})();
