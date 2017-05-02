'use strict';

(function () {
  var template = document.querySelector('#lodge-template');

  window.createDialog = function (newDialog) {
    var templateCopy = template.content.cloneNode(true);
    var templateData = newDialog;
    var lodgeTitle = templateCopy.querySelector('.lodge__title');
    var lodgeAddress = templateCopy.querySelector('.lodge__address');
    var lodgePrice = templateCopy.querySelector('.lodge__price');
    var lodgeType = templateCopy.querySelector('.lodge__type');
    var lodgeRooms = templateCopy.querySelector('.lodge__rooms-and-guests');
    var lodgeFeatures = templateCopy.querySelector('.lodge__features');
    var lodgeCheckIn = templateCopy.querySelector('.lodge__checkin-time');
    var lodgeDescription = templateCopy.querySelector('.lodge__description');
    var offerDialog = document.querySelector('#offer-dialog');
    var lodgePanel = offerDialog.querySelector('.dialog__panel');
    var dialogTitle = offerDialog.querySelector('.dialog__title');
    var dialogAvatar = dialogTitle.querySelector('img');
    var offerList = templateData.offer;
    var featuresFragment = document.createDocumentFragment();

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

    lodgeRooms.textContent = 'Для ' + offerList.guests + ' гостей в ' + offerList.rooms + ' комнатах';
    lodgeCheckIn.textContent = 'Заезд после ' + offerList.checkin + ', выезд до ' + offerList.checkout;

    for (var k = 0; k < offerList.features.length; k++) {
      var featuresList = offerList.features[k];
      var featuresSpan = document.createElement('span');

      featuresSpan.classList.add('feature__image', 'feature__image--' + featuresList);
      featuresFragment.appendChild(featuresSpan);
    }

    lodgeFeatures.appendChild(featuresFragment);
    lodgeDescription.textContent = offerList.description;
    dialogAvatar.src = newDialog.author.avatar;
    offerDialog.replaceChild(templateCopy, lodgePanel);
  };
})();
