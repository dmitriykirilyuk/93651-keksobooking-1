'use strict';
var informationCollection = [
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

for (var i = 0; i < informationCollection.length; i++) {
  var pinData = informationCollection[i];
  var pin = document.createElement('div');
  var pinImage = document.createElement('img');
  pin.classList.add('pin');
  pin.style.left = pinData.location.x + 'px';
  pin.style.top = pinData.location.y + 'px';

  pinImage.classList.add('rounded');
  pinImage.src = pinData.author.avatar;
  pinImage.width = '40';
  pinImage.height = '40';

  pin.appendChild(pinImage);
  fragment.appendChild(pin);
}
pinContainer.appendChild(fragment);

var template = document.querySelector('#lodge-template');
var lodgePanel = document.querySelector('.dialog__panel');
var lodgeTitle = lodgePanel.querySelector('.lodge__title');
var lodgeAddress = lodgePanel.querySelector('.lodge__address');
var lodgePrice = lodgePanel.querySelector('.lodge__price');
var lodgeType = lodgePanel.querySelector('.lodge__type');
var lodgeRooms = lodgePanel.querySelector('.lodge__rooms-and-guests');
var lodgeFeatures = lodgePanel.querySelector('.lodge__features');
var lodgeCheckIn = lodgePanel.querySelector('.lodge__checkin-time');
var lodgeDescription = lodgePanel.querySelector('.lodge__description');
var dialogAvatar = document.querySelector('.dialog__title');
for (var j = 0; j < informationCollection.length; j++) {
  var templateData = informationCollection[j];
  var templateCopy = template.content.cloneNode(true);

  lodgeTitle.textContent = templateData.offer.title;
  lodgeAddress.textContent = templateData.offer.address;
  lodgePrice.textContent = templateData.offer.price + '&#x20bd;/ночь';
  if (templateData.offer.type === 'flat') {
    lodgeType.textContent = 'Квартира';
  } else if (templateData.offer.type === 'bungalo') {
    lodgeType.textContent = 'Бунгало';
  } else {
    lodgeType.textContent = 'Дом';
  }
  lodgeRooms.textContent = 'Для ' + templateData.offer.price + ' гостей в ' + templateData.offer.rooms + ' комнатах';
  lodgeCheckIn.textContent = 'Заезд после ' + templateData.offer.checkin + ', выезд до ' + templateData.offer.checkout;
  for (var k = 0; k < templateData.offer.features.length; k++) {
    var featuresList = templateData.offer.features[k];
    var featuresSpan = null;
    featuresSpan.classList.add('feature__image', 'feature__image--{{название удобства}}'); /* здесь не шарю как сделать*/
    featuresSpan.innerHTML = '<span>' + featuresList + '</span>';
    lodgeFeatures.textContent = featuresSpan;
  }
  lodgeDescription.textContent = templateData.offer.description;
  dialogAvatar.img.src = templateData.author.avatar;
  template.appendChild(templateCopy);
}
