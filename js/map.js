'use strict';
(function () {
  var pinMap = document.querySelector('.tokyo__pin-map');
  pinMap.addEventListener('click', window.activatePin);
  pinMap.addEventListener('keydown', window.activatePinByKey);
  var drawPins = function (pins) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < pins.length; i++) {
      var pin = window.getPinNode(pins[i], i);
      fragment.appendChild(pin);
    }
    pinMap.appendChild(fragment);
  };
  drawPins(window.offersList);
})();
