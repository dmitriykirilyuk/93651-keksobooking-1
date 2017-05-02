'use strict';

(function () {
  var ESCAPE_KEY = 27;
  var ENTER_KEY = 13;
  var DEBOUNCE_INTERVAL = 500;
  var dialogClose = document.querySelector('.dialog__close');
  var pinActive;
  var tokyoFilters = document.querySelector('.tokyo__filters');
  var housingType = tokyoFilters.querySelector('#housing_type');
  var housingPrice = tokyoFilters.querySelector('#housing_price');
  var housingGuests = tokyoFilters.querySelector('#housing_guests-number');
  var housingRooms = tokyoFilters.querySelector('#housing_room-number');
  var housingFeatures = tokyoFilters.querySelector('#housing_features');
  var lastTimeout;
  var pinMap = document.querySelector('.tokyo__pin-map');

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

  var activatePin = function (event, offer) {
    if (pinActive) {
      pinActive.classList.remove('pin--active');
    }

    pinActive = event.target;

    if (event.target.nodeName === 'IMG') {
      pinActive = pinActive.parentNode;
    }

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

  window.setPinEvents = function (elem, elemData) {
    elem.addEventListener('click', function (event) {
      activatePin(event, elemData);
    });

    elem.addEventListener('keydown', function (event) {
      activatePinByKey(event, elemData);
    });
  };

  window.debounce = function (fun) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }

    lastTimeout = window.setTimeout(fun, DEBOUNCE_INTERVAL);
  };

  var clearMap = function () {
    var pinMapChildren = pinMap.querySelectorAll('.pin:not(.pin__main)');

    Array.prototype.forEach.call(pinMapChildren, function (pin) {
      pinMap.removeChild(pin);
    });
  };

  var isPriceValid = function (price, filterValue) {
    if (filterValue === '10000to50000') {
      return price >= 10000 && price < 50000;
    }

    if (filterValue === 'to10000') {
      return price < 10000;
    }

    if (filterValue === 'from50000') {
      return price >= 50000;
    }

    return true;
  };

  window.getfilteredOfferslist = function (offersList) {
    return offersList.filter(function (pinOffer) {
      if (housingType.value !== 'any' && pinOffer.offer.type !== housingType.value) {
        return false;
      }

      if (!isPriceValid(pinOffer.offer.price, housingPrice.value)) {
        return false;
      }

      if (housingRooms.value !== 'any' && pinOffer.offer.rooms.toString() !== housingRooms.value) {
        return false;
      }

      if (housingGuests.value !== 'any' && pinOffer.offer.guests.toString() !== housingGuests.value) {
        return false;
      }

      var featuresCheckBox = housingFeatures.querySelectorAll('input[name="feature"]:checked');
      for (var i = 0; i < featuresCheckBox.length; i++) {
        if (!pinOffer.offer.features.includes(featuresCheckBox[i].value)) {
          return false;
        }
      }

      return true;
    });
  };

  var updateFilters = function (offersList) {
    var filteredOfferslist = window.getfilteredOfferslist(offersList);
    clearMap();
    window.drawPins(filteredOfferslist);
  };

  window.setFilterEvents = function (offersList) {
    tokyoFilters.addEventListener('change', function (evt) {
      window.debounce(updateFilters(offersList));
    });
  };

  var activatePinByKey = function (event, offer) {
    if (pinActive) {
      pinActive.classList.remove('pin--active');
    }

    if (event.keyCode === ENTER_KEY) {
      window.showCard();
      pinActive = event.target;
      window.createDialog(offer);
      pinActive.classList.add('pin--active');
    }
  };
})();
