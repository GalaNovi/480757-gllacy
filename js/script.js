var toggles = document.querySelectorAll('.toggle');
var slides = document.querySelectorAll('.slide');
var wrapper = document.querySelector('.site-wrapper');
var active = 0;
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

for (i = 0; i < toggles.length; i++) {
  setSlider(i);
}

function setSlider(number) {
  toggles[number].onclick = function(e) {
    slides[active].classList.remove('active');
    toggles[active].classList.remove('active');
    wrapper.classList.remove('wrapper-' + (active+1));
    active = number;
    slides[active].classList.add('active');
    toggles[active].classList.add('active');
    wrapper.classList.add('wrapper-' + (number+1));
  }
}

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
