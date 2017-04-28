'use strict';
(function () {
  var pinMap = document.querySelector('.tokyo__pin-map');
  var dragZoneWidth = 1200;
  var dragZoneHeight = 700;
  var posLeftMax = dragZoneWidth - 37;
  var postTopMax = dragZoneHeight - 94;
  var postLeftMin = 0 - 37;
  window.drawPins = function (pins) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < pins.length; i++) {
      var pin = window.getPinNode(pins[i], i);
      fragment.appendChild(pin);
    }
    pinMap.appendChild(fragment);

  };

  var draggablePin = document.querySelector('.pin__main');
  var addressField = document.querySelector('#address');
  var tokyoMap = document.querySelector('.tokyo');
  addressField.setAttribute('readonly', true);
  draggablePin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoordinates = {
      x: evt.clientX,
      y: evt.clientY
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
        tokyoMap.removeEventListener('mousemove', onMouseMove);
        tokyoMap.removeEventListener('mouseup', onMouseUp);
      } else if (posLeftPin < postLeftMin) {
        posLeftPin = postLeftMin;
        tokyoMap.removeEventListener('mousemove', onMouseMove);
        tokyoMap.removeEventListener('mouseup', onMouseUp);
      } else if (posTopPin > postTopMax) {
        posTopPin = postTopMax;
        tokyoMap.removeEventListener('mousemove', onMouseMove);
        tokyoMap.removeEventListener('mouseup', onMouseUp);
      }
      draggablePin.style.top = posTopPin + 'px';
      draggablePin.style.left = posLeftPin + 'px';
      var PIN_HEIGHT = 94;
      var PIN_WIDTH_HALF = 37;
      var offsetTopPin = draggablePin.offsetTop + PIN_HEIGHT;
      var offsetLeftPin = draggablePin.offsetLeft + PIN_WIDTH_HALF;

      addressField.setAttribute('value', 'x: ' + (offsetLeftPin) + ' , ' + 'y: ' + (offsetTopPin));
    };
    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      tokyoMap.removeEventListener('mousemove', onMouseMove);
      tokyoMap.removeEventListener('mouseup', onMouseUp);
    };

    tokyoMap.addEventListener('mousemove', onMouseMove);
    tokyoMap.addEventListener('mouseup', onMouseUp);


  });
})();
