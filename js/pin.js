'use strict';
(function () {
  var ESCAPE_KEY = 27;
  var ENTER_KEY = 13;
  var dialogClose = document.querySelector('.dialog__close');
  var pinActive;
  window.getPinNode = function (pinData, i) {
    var pin = document.createElement('div');
    var pinImage = document.createElement('img');
    pin.classList.add('pin');
    pin.style.left = pinData.location.x + 'px';
    pin.style.top = pinData.location.y + 'px';
    pin.setAttribute('tabindex', '0');
    pin.setAttribute('data-index', i);
    pinImage.classList.add('rounded');
    pinImage.src = pinData.author.avatar;
    pinImage.width = '40';
    pinImage.height = '40';
    pin.appendChild(pinImage);
    return pin;
  };

  var activatePin = function (event, offersList) {
    if (pinActive) {
      pinActive.classList.remove('pin--active');
    }
    pinActive = event.target;
    if (event.target.nodeName === 'IMG') {
      pinActive = pinActive.parentNode;
    }
    var index = pinActive.getAttribute('data-index');
    var offer = offersList[index];
    pinActive.classList.add('pin--active');
    if (offer) {
      window.createDialog(offer);
      window.showCard();
    }
  };

  dialogClose.addEventListener('click', function () {
    window.hideCard();
    pinActive.classList.remove('pin--active');
    pinActive = null;
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESCAPE_KEY) {
      window.hideCard();
      pinActive.classList.remove('pin--active');
      pinActive = null;
    }

    if (document.activeElement === dialogClose && evt.keyCode === ENTER_KEY) {
      window.hideCard();
      pinActive.classList.remove('pin--active');
      pinActive = null;
      evt.preventDefault();
    }
  });
  window.setPinEvents = function (offersList) {
    pinMap.addEventListener('click', function (event) {
      activatePin(event, offersList);
    });
    pinMap.addEventListener('keydown', function (event) {
      activatePinByKey(event, offersList);
    });
  };
  var tokyoFilters = document.querySelector('.tokyo__filters');
  var housingType = tokyoFilters.querySelector('#housing_type');
  var pinMap = document.querySelector('.tokyo__pin-map');
  var clearMap = function () {
    var pinMapChildren = pinMap.querySelectorAll('.pin:not(.pin__main)');
    Array.prototype.forEach.call(pinMapChildren, function (pin) {
      pinMap.removeChild(pin);
    });
  };
  window.setFilterEvents = function (offersList) {
    tokyoFilters.addEventListener('change', function (evt) {
      var filterPins = offersList.filter(function (pinOffer) {
        return pinOffer.offer.type === housingType.value;
      });
      clearMap();
      window.drawPins(filterPins);
    });
  };
  var activatePinByKey = function (event, offersList) {
    if (pinActive) {
      pinActive.classList.remove('pin--active');
    }
    if (event.keyCode === ENTER_KEY) {
      window.showCard();
      pinActive = event.target;
      var index = pinActive.getAttribute('data-index');
      var offer = offersList[index];
      window.createDialog(offer);
      pinActive.classList.add('pin--active');
    }
  };
})();
