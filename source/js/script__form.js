var reviewForm = document.querySelector(".review-form");
var sentPopup = document.querySelector(".page-modal__sent");
var errorPopup = document.querySelector(".page-modal__error");
var closeSent = document.querySelector(".button__sent");
var closeError = document.querySelector(".button__error");
var formName = document.querySelector("#name");
var formSurname = document.querySelector("#surname");
var formPhone = document.querySelector("#phone");
var formMail = document.querySelector("#mail");

reviewForm.addEventListener("submit", function(evt) {
  if (!formName.value||!formSurname.value||!formPhone.value||!formMail.value) {
    evt.preventDefault ();
    errorPopup.classList.add("page-modal__error--show");
  } else {
    evt.preventDefault();
    sentPopup.classList.add("page-modal__sent--show");
  }
});

closeSent.addEventListener ("click", function(evt) {
    evt.preventDefault();
    sentPopup.classList.remove("page-modal__sent--show");
});

closeError.addEventListener ("click", function(evt) {
    evt.preventDefault();
    errorPopup.classList.remove("page-modal__error--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (sentPopup.classList.contains("page-modal__sent--show")) {
      evt.preventDefault();
      sentPopup.classList.remove("page-modal__sent--show");
    }

    if (errorPopup.classList.contains("page-modal__error--show")) {
      evt.preventDefault();
      errorPopup.classList.remove("page-modal__error--show");
    }
  }
});
