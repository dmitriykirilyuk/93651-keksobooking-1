'use strict';
(function () {
  var ESCAPE_KEY = 27;
  var popupError = document.querySelector('.popup-error');
  var popupClose = popupError.querySelector('.popup-error__close');
  var popupMessage = document.querySelector('.popup-error__message');
  window.load = function (URL, onLoad) {
    var xmlhRequest = new XMLHttpRequest();
    xmlhRequest.responseType = 'json';
    var onError = function (message) {
      var closeByClick = function () {
        popupError.style.display ='none';
      };
      popupError.style.display ='block';
      popupMessage.textContent = message;
      popupClose.addEventListener('click', closeByClick);
      document.addEventListener('keydown', function(evtClose) {
        if (evtClose.keyCode === ESCAPE_KEY) {
          closeByClick();
        }
      });
    };
    xmlhRequest.addEventListener('load', function () {
      if (xmlhRequest.status === 200) {
        onLoad(xmlhRequest.response);
      } else {
        onError('Статус ошибки: ' + xmlhRequest.status + '' + xmlhRequest.responseText);
      }
    });

    xmlhRequest.addEventListener('error', function () {
      onError('Ошибка соединения');
    });

    xmlhRequest.addEventListener('timeout', function () {
      onError('Истекло время соединения');
    });
    xmlhRequest.timeout = 10000;
    xmlhRequest.open('GET', URL);
    xmlhRequest.send();


  };
})();
