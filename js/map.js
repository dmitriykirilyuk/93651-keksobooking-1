'use strict';
var offersList = [
  {
    'author': {
      'avatar': 'img/avatars/user01.png'
    },

    'offer': {
      'title': 'Большая уютная квартира',
      'address': 'location.x, location.y',
      'price': 1000,
      'type': 'flat',
      'rooms': 1,
      'guests': 22,
      'checkin': '12:00',
      'checkout': '13:00',
      'features': [
        'wifi',
        'dishwasher',
        'parking'],
      'description': '',
      'photos': ''
    },

    'location': {
      'x': 250,
      'y': 200
    }
  },
  {
    'author': {
      'avatar': 'img/avatars/user02.png'
    },

    'offer': {
      'title': 'Маленькая неуютная квартира',
      'address': 'location.x, location.y',
      'price': 5000,
      'type': 'flat',
      'rooms': 3,
      'guests': 2,
      'checkin': '14:00',
      'checkout': '12:00',
      'features': [
        'wifi',
        'dishwasher',
        'parking',
        'elevator'],
      'description': '',
      'photos': ''
    },

    'location': {
      'x': 350,
      'y': 150
    }
  },
  {
    'author': {
      'avatar': 'img/avatars/user03.png'
    },

    'offer': {
      'title': 'Огромный прекрасный дворец',
      'address': 'location.x, location.y',
      'price': 3000,
      'type': 'bungalo',
      'rooms': 4,
      'guests': 3,
      'checkin': '12:00',
      'checkout': '12:00',
      'features': [
        'wifi',
        'conditioner',
        'parking',
        'elevator'],
      'description': '',
      'photos': ''
    },

    'location': {
      'x': 450,
      'y': 350
    }
  },
  {
    'author': {
      'avatar': 'img/avatars/user04.png'
    },

    'offer': {
      'title': 'Маленький ужасный дворец',
      'address': 'location.x, location.y',
      'price': 5000,
      'type': 'bungalo',
      'rooms': 5,
      'guests': 12,
      'checkin': '12:00',
      'checkout': '13:00',
      'features': [
        'wifi',
        'conditioner',
        'parking',
        'elevator',
        'washer'],
      'description': '',
      'photos': ''
    },

    'location': {
      'x': 600,
      'y': 300
    }
  },
  {
    'author': {
      'avatar': 'img/avatars/user05.png'
    },

    'offer': {
      'title': 'Красивый гостевой домик',
      'address': 'location.x, location.y',
      'price': 7000,
      'type': 'house',
      'rooms': 3,
      'guests': 8,
      'checkin': '12:00',
      'checkout': '13:00',
      'features': [
        'wifi',
        'conditioner',
        'parking',
        'elevator',
        'washer',
        'dishwasher'],
      'description': '',
      'photos': ''
    },

    'location': {
      'x': 820,
      'y': 420
    }
  },
  {
    'author': {
      'avatar': 'img/avatars/user06.png'
    },

    'offer': {
      'title': 'Некрасивый негостеприимный домик',
      'address': 'location.x, location.y',
      'price': 1500,
      'type': 'house',
      'rooms': 2,
      'guests': 5,
      'checkin': '13:00',
      'checkout': '13:00',
      'features': [
        'wifi',
        'conditioner',
        'parking'],
      'description': '',
      'photos': ''
    },

    'location': {
      'x': 340,
      'y': 410
    }
  },
  {
    'author': {
      'avatar': 'img/avatars/user07.png'
    },

    'offer': {
      'title': 'Уютное бунгало далеко от моря',
      'address': 'location.x, location.y',
      'price': 4500,
      'type': 'bungalo',
      'rooms': 3,
      'guests': 3,
      'checkin': '12:00',
      'checkout': '13:00',
      'features': [
        'wifi',
        'conditioner',
        'parking',
        'elevator'],
      'description': '',
      'photos': ''
    },

    'location': {
      'x': 900,
      'y': 455
    }
  },
  {
    'author': {
      'avatar': 'img/avatars/user08.png'
    },

    'offer': {
      'title': 'Неуютное бунгало по колено в воде',
      'address': 'location.x, location.y',
      'price': 8500,
      'type': 'bungalo',
      'rooms': 5,
      'guests': 10,
      'checkin': '14:00',
      'checkout': '13:00',
      'features': [
        'wifi',
        'conditioner',
        'parking',
        'elevator'],
      'description': '',
      'photos': ''
    },

    'location': {
      'x': 835,
      'y': 375
    }
  },
];

var pinContainer = document.querySelector('.tokyo__pin-map');
var fragment = document.createDocumentFragment();

for (var i = 0; i < offersList.length; i++) {
  var pinData = offersList[i];
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
var template = document.querySelector('#lodge-template');

var offerDialog = document.querySelector('#offer-dialog');
var lodgePanel = offerDialog.querySelector('.dialog__panel');

var dialogTitle = offerDialog.querySelector('.dialog__title');
var dialogAvatar = dialogTitle.querySelector('img');

var createDialog = function (newDialog) {
  var templateCopy = template.content.cloneNode(true);
  var templateData = offersList[0];
  templateData = newDialog;
  var lodgeTitle = templateCopy.querySelector('.lodge__title');
  var lodgeAddress = templateCopy.querySelector('.lodge__address');
  var lodgePrice = templateCopy.querySelector('.lodge__price');
  var lodgeType = templateCopy.querySelector('.lodge__type');
  var lodgeRooms = templateCopy.querySelector('.lodge__rooms-and-guests');
  var lodgeFeatures = templateCopy.querySelector('.lodge__features');
  var lodgeCheckIn = templateCopy.querySelector('.lodge__checkin-time');
  var lodgeDescription = templateCopy.querySelector('.lodge__description');
  var offerList = templateData.offer;
  lodgeTitle.textContent = offerList.title;
  lodgeAddress.textContent = offerList.address;
  lodgePrice.textContent = offerList.price + '&#x20bd;/ночь';
  if (offerList.type === 'flat') {
    lodgeType.textContent = 'Квартира';
  } else if (offerList.type === 'bungalo') {
    lodgeType.textContent = 'Бунгало';
  } else {
    lodgeType.textContent = 'Дом';
  }
  lodgeRooms.textContent = 'Для ' + offerList.price + ' гостей в ' + offerList.rooms + ' комнатах';
  lodgeCheckIn.textContent = 'Заезд после ' + offerList.checkin + ', выезд до ' + offerList.checkout;
  var featuresFragment = document.createDocumentFragment();
  for (var k = 0; k < offerList.features.length; k++) {
    var featuresList = offerList.features[k];
    var featuresSpan = document.createElement('span');
    featuresSpan.classList.add('feature__image', 'feature__image--' + featuresList);
    featuresFragment.appendChild(featuresSpan);
  }
  lodgeFeatures.appendChild(featuresFragment);
  lodgeDescription.textContent = offerList.description;
  dialogAvatar.src = templateData.author.avatar;
  offerDialog.replaceChild(templateCopy, lodgePanel);
};

var pinMap = document.querySelector('.tokyo__pin-map');
var dialog = document.querySelector('.dialog');
var dialogClose = dialogTitle.querySelector('.dialog__close');
var ESCAPE_KEY = 27;
var ENTER_KEY = 13;
var pinActive;
pinMap.addEventListener('click', function (event) {
  if (pinActive) {
    pinActive.classList.remove('pin--active');
  }
  pinActive = event.target;
  var index = pinActive.getAttribute('data-index');
  var offer = offersList[index];
  createDialog(offer);
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
  if (event.keyCode === ENTER_KEY) {
    dialog.style.display = 'block';
    pinActive = event.target;
    var index = pinActive.getAttribute('data-index');
    var offer = offersList[index];
    createDialog(offer);
    pinActive.classList.add('pin--active');
  }
});

var formPanel = document.querySelector('.form__panel');
var inputTitle = formPanel.querySelector('#title');
var inputPrice = formPanel.querySelector('#price');
var timeIn = document.querySelector('#time');
var timeOut = document.querySelector('#timeout');
var housingType = document.querySelector('#type');
var roomsNumber = document.querySelector('#room_number');
var roomCapacity = document.querySelector('#capacity');
inputTitle.required = 'true';
inputTitle.setAttribute('minlength', 30);
inputTitle.setAttribute('maxlength', 100);
inputPrice.required = 'true';
inputPrice.setAttribute('type', 'number');
inputPrice.setAttribute('min', 1000);
inputPrice.setAttribute('max', 1000000);
inputPrice.setAttribute('placeholder', 1000);

timeIn.addEventListener('change', function () {
  // timeOut.selectedIndex = timeIn.selectedIndex;
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', function () {
  // timeIn.selectedIndex = timeOut.selectedIndex;
  timeIn.value = timeOut.value;
});

housingType.addEventListener('change', function () {
  if (housingType.value === 'flat') {
    inputPrice.setAttribute('min', 1000);
    inputPrice.setAttribute('value', 1000);
  } else if (housingType.value === 'slum') {
    inputPrice.setAttribute('min', 0);
    inputPrice.setAttribute('value', 0);
  } else {
    inputPrice.setAttribute('min', 10000);
    inputPrice.setAttribute('value', 10000);
  }
});

inputPrice.addEventListener('change', function () {
  if (inputPrice.value >= 1000) {
    housingType.value = 'flat';
  } else if (inputPrice.value >= 0) {
    housingType.value = 'slum';
  } else if (inputPrice.value >= 10000) {
    housingType.value = 'palace';
  }
});

roomsNumber.addEventListener('change', function () {
  if (roomsNumber.value === '2 rooms' || roomsNumber.value === '100 rooms') {
    roomCapacity.value = '3 guests';
  } else {
    roomCapacity.value = 'no guests';
    roomCapacity.options[0].setAttribute('disabled', true);
  }
});
