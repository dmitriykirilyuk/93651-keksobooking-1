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

  var draggablePin = document.querySelector('.pin__main');
  var addressField = document.querySelector('#address');

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

      draggablePin.style.top = (draggablePin.offsetTop - shift.y) + 'px';
      draggablePin.style.left = (draggablePin.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
