//Задача 2/ https://jsbin.com/deyoteb/edit?html,css,js,output - исправить код таким образом, чтобы при фокусе у инпутов добавлялась красная рамка. Обработка событий должна происходить на formElement.

var formElement = document.forms["formElement"];

for (var element of formElement.elements) {
  element.onfocus = function (evt) {
    var activeElement = formElement.querySelector(".focused");
    if (activeElement) {
      activeElement.classList.remove("focused");
    }
    evt.target.classList.add("focused");
  };
  element.onblur = function (evt) {
    var activeElement = formElement.querySelector(".focused");
    if (activeElement) {
      activeElement.classList.remove("focused");
    }
  };
}