'use strict';
(function () {

  window.synchronizeFields = function (firstInputValue, secondInputValue, arrayFirst, arraySecond, callback) {
    firstInputValue.addEventListener('change', function () {
      if (typeof callback === 'function') {
        var selectedFirstValue = arrayFirst.indexOf(firstInputValue.value);
        callback(secondInputValue, arraySecond[selectedFirstValue]);
      }
    });

    secondInputValue.addEventListener('change', function () {
      if (typeof callback === 'function') {
        var selectedSecondValue = arraySecond.indexOf(secondInputValue.value);
        callback(firstInputValue, arrayFirst[selectedSecondValue]);
      }
    });
  };
})();
