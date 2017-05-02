'use strict';

(function () {
  var ESCAPE_KEY = 27;
  var popupError = document.querySelector('.popup-error');
  var popupClose = popupError.querySelector('.popup-error__close');
  var popupMessage = document.querySelector('.popup-error__message');

  var onSuccess = function (data) {
    window.drawPins(data);
    window.debounce(window.setFilterEvents(data));
  };

  var onError = function (message) {
    var closeByClick = function () {
      popupError.style.display = 'none';
    };

    popupError.style.display = 'block';
    popupMessage.textContent = message;
    popupClose.addEventListener('click', closeByClick);
    document.addEventListener('keydown', function (evtClose) {

      if (evtClose.keyCode === ESCAPE_KEY) {
        closeByClick();
      }
    });
  };

  window.load('https://intensive-javascript-server-kjgvxfepjl.now.sh/keksobooking/data', onSuccess, onError);
}());
