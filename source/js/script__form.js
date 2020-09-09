var reviewForm = document.querySelector(".review-form");
var sentPopup = document.querySelector(".page-modal--sent");
var errorPopup = document.querySelector(".page-modal--error");
var closeSent = document.querySelector(".button--sent");
var closeError = document.querySelector(".button--error");
var formName = document.querySelector("#name");
var formSurname = document.querySelector("#surname");
var formPhone = document.querySelector("#phone");
var formMail = document.querySelector("#mail");

reviewForm.addEventListener("submit", function(evt) {
  if (!formName.value||!formSurname.value||!formPhone.value||!formMail.value) {
    evt.preventDefault ();
    errorPopup.classList.add("page-modal--show");
  } else {
    evt.preventDefault();
    sentPopup.classList.add("page-modal--show");
  }
});

closeSent.addEventListener ("click", function(evt) {
    evt.preventDefault();
    sentPopup.classList.remove("page-modal--show");
});

closeError.addEventListener ("click", function(evt) {
    evt.preventDefault();
    errorPopup.classList.remove("page-modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (sentPopup.classList.contains("page-modal--show")) {
      evt.preventDefault();
      sentPopup.classList.remove("page-modal--show");
    }

    if (errorPopup.classList.contains("page-modal--show")) {
      evt.preventDefault();
      errorPopup.classList.remove("page-modal--show");
    }
  }
});
