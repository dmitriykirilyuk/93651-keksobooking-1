'use strict';
(function () {
  var formPanel = document.querySelector('.form__panel');
  var inputTitle = formPanel.querySelector('#title');
  var inputPrice = formPanel.querySelector('#price');
  var timeIn = document.querySelector('#time');
  var timeOut = document.querySelector('#timeout');
  var housingType = document.querySelector('#type');
  var roomsNumber = document.querySelector('#room_number');
  var roomCapacity = document.querySelector('#capacity');
  var formSubmit = document.querySelector('.form__submit');
  var fieldsToValidate = [inputTitle, inputPrice];
  var form = document.querySelector('.notice__form');

  inputTitle.required = 'true';
  inputTitle.setAttribute('minlength', 30);
  inputTitle.setAttribute('maxlength', 100);
  inputPrice.required = 'true';
  inputPrice.setAttribute('type', 'number');
  inputPrice.setAttribute('min', 1000);
  inputPrice.setAttribute('max', 1000000);
  inputPrice.setAttribute('placeholder', 1000);

  var syncValues = function (element, value) {
    element.value = value;
  };

  var syncValueWithMin = function (element, value) {
    element.min = value;
    element.value = value;
  };
  window.synchronizeFields(timeIn, timeOut, ['12', '13', '14'], ['12', '13', '14'], syncValues);
  window.synchronizeFields(housingType, inputPrice, ['flat', 'slum', 'palace'], ['1000', '0', '10000'], syncValueWithMin);
  window.synchronizeFields(roomsNumber, roomCapacity, ['1 room', '2 rooms', '100 rooms'], ['no guests', '3 guests', '3 guests'], syncValues);

  formSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    var hasError = false;
    for (var m = 0; m < fieldsToValidate.length; m++) {
      if (!fieldsToValidate[m].checkValidity()) {
        hasError = true;
        fieldsToValidate[m].style.border = '3px solid red';
      } else {
        fieldsToValidate[m].style.border = '3px solid green';
      }
    }
    if (!hasError) {
      form.reset();
    }
    event.preventDefault();
  });
})();
