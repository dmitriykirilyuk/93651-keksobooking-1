'use strict';
(function () {
  var dialog = document.querySelector('.dialog');
  window.showCard = function () {
    dialog.style.display = 'block';
  };

  window.hideCard = function () {
    dialog.style.display = 'none';
  };
})();
