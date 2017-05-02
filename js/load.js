'use strict';

(function () {
  window.load = function (URL, onLoad, onError) {
    var xmlhRequest = new XMLHttpRequest();

    xmlhRequest.responseType = 'json';

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
