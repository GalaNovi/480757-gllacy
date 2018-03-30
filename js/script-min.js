var toggles=document.querySelectorAll(".toggle"),slides=document.querySelectorAll(".slide"),wrapper=document.querySelector(".site-wrapper"),active=0,feedbackOpen=document.querySelector(".js-feedback-button"),feedback=document.querySelector(".feedback-container"),feedbackClose=document.querySelector(".modal-close"),overlay=document.querySelector(".overlay"),feedbackName=feedback.querySelector("[name=feedback-name]"),form=feedback.querySelector(".feedback-form"),feedbackEmail=feedback.querySelector("[name=feedback-email]"),feedbackWishes=feedback.querySelector("[name=feedback-wishes]"),isStorageSupport=!0,storage="";for(i=0;i<toggles.length;i++)setSlider(i);function setSlider(e){toggles[e].onclick=function(a){slides[active].classList.remove("active"),toggles[active].classList.remove("active"),wrapper.classList.remove("wrapper-"+(active+1)),slides[active=e].classList.add("active"),toggles[active].classList.add("active"),wrapper.classList.add("wrapper-"+(e+1))}}feedbackOpen.addEventListener("click",function(e){e.preventDefault(),feedback.classList.add("modal-show"),overlay.classList.add("enabled");try{storage=localStorage.getItem("feedbackName")}catch(e){isStorageSupport=!1}storage&&(feedbackName.value=storage);try{storage=localStorage.getItem("feedbackEmail")}catch(e){isStorageSupport=!1}storage&&(feedbackEmail.value=storage),feedbackName.value?feedbackEmail.value?feedbackWishes.focus():feedbackEmail.focus():feedbackName.focus()}),feedbackClose.addEventListener("click",function(e){e.preventDefault(),feedback.classList.remove("modal-show"),overlay.classList.remove("enabled"),feedback.classList.remove("error")}),overlay.addEventListener("click",function(){feedback.classList.remove("modal-show"),overlay.classList.remove("enabled"),feedback.classList.remove("error")}),document.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),feedback.classList.contains("modal-show")&&(feedback.classList.remove("modal-show"),overlay.classList.remove("enabled"),feedback.classList.remove("error")))}),form.addEventListener("submit",function(e){feedbackEmail.value?isStorageSupport&&(localStorage.setItem("feedbackName",feedbackName.value),localStorage.setItem("feedbackEmail",feedbackEmail.value)):(e.preventDefault(),feedback.classList.remove("error"),feedback.offsetWidth=feedback.offsetWidth,feedback.classList.add("error"))});