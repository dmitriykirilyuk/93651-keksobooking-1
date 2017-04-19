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

  timeIn.addEventListener('change', function () {
    timeOut.value = timeIn.value;
  });

  timeOut.addEventListener('change', function () {
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
