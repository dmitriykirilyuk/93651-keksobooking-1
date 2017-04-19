'use strict';
(function () {
  var ESCAPE_KEY = 27;
  var ENTER_KEY = 13;
  var pinMap = document.querySelector('.tokyo__pin-map');
  var dialog = document.querySelector('.dialog');
  var dialogClose = document.querySelector('.dialog__close');
  var pinActive;
  var pinContainer = document.querySelector('.tokyo__pin-map');
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < window.offersList.length; i++) {
    var pinData = window.offersList[i];
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
    fragment.appendChild(pin);
  }
  pinContainer.appendChild(fragment);

  pinMap.addEventListener('click', function (event) {
    if (pinActive) {
      pinActive.classList.remove('pin--active');
    }
    pinActive = event.target;
    if (event.target.nodeName === 'IMG') {
      pinActive = pinActive.parentNode;
    }
    var index = pinActive.getAttribute('data-index');
    var offer = window.offersList[index];
    window.createDialog(offer);
    pinActive.classList.add('pin--active');
    dialog.style.display = 'block';
  });

  dialogClose.addEventListener('click', function () {
    dialog.style.display = 'none';
    pinActive.classList.remove('pin--active');
    pinActive = null;
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESCAPE_KEY) {
      dialog.style.display = 'none';
      pinActive.classList.remove('pin--active');
      pinActive = null;
    }

    if (document.activeElement === dialogClose && evt.keyCode === ENTER_KEY) {
      dialog.style.display = 'none';
      pinActive.classList.remove('pin--active');
      pinActive = null;
      evt.preventDefault();
    }
  });

  pinMap.addEventListener('keydown', function (event) {
    if (pinActive) {
      pinActive.classList.remove('pin--active');
    }
    if (event.keyCode === ENTER_KEY) {
      dialog.style.display = 'block';
      pinActive = event.target;
      var index = pinActive.getAttribute('data-index');
      var offer = window.offersList[index];
      window.createDialog(offer);
      pinActive.classList.add('pin--active');
    }
  });
})();
