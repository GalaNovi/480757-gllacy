var toggle1 = document.querySelector('.toggle-1');
var toggle2 = document.querySelector('.toggle-2');
var toggle3 = document.querySelector('.toggle-3');
var slide1 = document.querySelector('.slide-1');
var slide2 = document.querySelector('.slide-2');
var slide3 = document.querySelector('.slide-3');
var siteWrapper = document.querySelector('.site-wrapper');
var wrapper1 = document.querySelector('.wrapper-1');
var wrapper2 = document.querySelector('.wrapper-2');
var wrapper3 = document.querySelector('.wrapper-3');
var feedbackOpen = document.querySelector('.js-feedback-button');
var feedback = document.querySelector('.feedback-container');
var feedbackClose = document.querySelector('.modal-close');
var overlay = document.querySelector('.overlay');
var feedbackName = feedback.querySelector('[name=feedback-name]');
var form = feedback.querySelector('.feedback-form');
var feedbackEmail = feedback.querySelector('[name=feedback-email]');
var feedbackWishes = feedback.querySelector('[name=feedback-wishes]');
var isStorageSupport = true;
var storage = "";

toggle1.addEventListener ('click', function (evt) {
  evt.preventDefault();
  toggle2.classList.remove('active');
  toggle3.classList.remove('active');
  toggle1.classList.add('active');
  slide2.classList.remove('active');
  slide3.classList.remove('active');
  slide1.classList.add('active');
  siteWrapper.classList.remove('wrapper-2');
  siteWrapper.classList.remove('wrapper-3');
  siteWrapper.classList.add('wrapper-1');
})

toggle2.addEventListener ('click', function (evt) {
  evt.preventDefault();
  toggle1.classList.remove('active');
  toggle3.classList.remove('active');
  toggle2.classList.add('active');
  slide1.classList.remove('active');
  slide3.classList.remove('active');
  slide2.classList.add('active');
  siteWrapper.classList.remove('wrapper-1');
  siteWrapper.classList.remove('wrapper-3');
  siteWrapper.classList.add('wrapper-2');
})

toggle3.addEventListener ('click', function (evt) {
  evt.preventDefault();
  toggle1.classList.remove('active');
  toggle2.classList.remove('active');
  toggle3.classList.add('active');
  slide1.classList.remove('active');
  slide2.classList.remove('active');
  slide3.classList.add('active');
  siteWrapper.classList.remove('wrapper-1');
  siteWrapper.classList.remove('wrapper-2');
  siteWrapper.classList.add('wrapper-3');
})

feedbackOpen.addEventListener('click', function(evt) {
  evt.preventDefault();
  feedback.classList.add('modal-show');
  overlay.classList.add('enabled');
  try {
    storage = localStorage.getItem("feedbackName");
  }
  catch (err) {
    isStorageSupport = false;
  }
  if (storage) {
    feedbackName.value = storage;
  }

  try {
    storage = localStorage.getItem("feedbackEmail");
  }
  catch (err) {
    isStorageSupport = false;
  }
  if (storage) {
    feedbackEmail.value = storage;
  }
  if (!feedbackName.value) {
  feedbackName.focus();
  } else {
      if (!feedbackEmail.value) {
        feedbackEmail.focus();
      } else {
        feedbackWishes.focus();
      }
    }
})

feedbackClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  feedback.classList.remove('modal-show');
  overlay.classList.remove('enabled');
  feedback.classList.remove('error');
});

overlay.addEventListener('click', function () {
  feedback.classList.remove('modal-show');
  overlay.classList.remove('enabled');
  feedback.classList.remove('error');
})

document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedback.classList.contains('modal-show')) {
      feedback.classList.remove('modal-show');
      overlay.classList.remove('enabled');
      feedback.classList.remove('error');
    }
  }
})

form.addEventListener('submit', function(evt) {
  if (!feedbackEmail.value) {
    evt.preventDefault();
    feedback.classList.remove('error');
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add('error');
    console.log('it work');
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem('feedbackName', feedbackName.value);
      localStorage.setItem('feedbackEmail', feedbackEmail.value);
    }
  }
});
