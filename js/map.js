'use strict';

(function () {
  var PIN_HEIGHT = 94;
  var PIN_WIDTH_HALF = 37;
  var pinMap = document.querySelector('.tokyo__pin-map');
  var dragZoneWidth = 1200;
  var dragZoneHeight = 700;
  var posLeftMax = dragZoneWidth - 37;
  var postTopMax = dragZoneHeight - 94;
  var postLeftMin = 0 - 37;
  var draggablePin = document.querySelector('.pin__main');
  var addressField = document.querySelector('#address');
  var tokyoMap = document.querySelector('.tokyo');

  window.drawPins = function (pins) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < pins.length; i++) {
      var pin = window.getPinNode(pins[i], i);
      window.setPinEvents(pin, pins[i]);
      fragment.appendChild(pin);
    }

    pinMap.appendChild(fragment);
  };

  addressField.setAttribute('readonly', true);

  draggablePin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoordinates = {
      x: evt.clientX,
      y: evt.clientY
    };

    var removeMouseHandlers = function () {
      tokyoMap.removeEventListener('mousemove', onMouseMove);
      tokyoMap.removeEventListener('mouseup', onMouseUp);
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoordinates.x - moveEvt.clientX,
        y: startCoordinates.y - moveEvt.clientY
      };

      startCoordinates = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      var posLeftPin = draggablePin.offsetLeft - shift.x;
      var posTopPin = draggablePin.offsetTop - shift.y;

      if (posLeftPin > posLeftMax) {
        posLeftPin = posLeftMax;
        removeMouseHandlers();
      } else if (posLeftPin < postLeftMin) {
        posLeftPin = postLeftMin;
        removeMouseHandlers();
      } else if (posTopPin > postTopMax) {
        posTopPin = postTopMax;
        removeMouseHandlers();
      }

      draggablePin.style.top = posTopPin + 'px';
      draggablePin.style.left = posLeftPin + 'px';

      var offsetTopPin = draggablePin.offsetTop + PIN_HEIGHT;
      var offsetLeftPin = draggablePin.offsetLeft + PIN_WIDTH_HALF;

      addressField.setAttribute('value', 'x: ' + (offsetLeftPin) + ' , ' + 'y: ' + (offsetTopPin));
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      removeMouseHandlers();
    };

    tokyoMap.addEventListener('mousemove', onMouseMove);
    tokyoMap.addEventListener('mouseup', onMouseUp);
  });
})();
