// SELECTORS

const body = document.getElementsByTagName("BODY")[0];
const videoPopup = document.querySelector(".video-popup-cont");
const webDevPopup = document.querySelector(".web-dev-popup-cont");
const designPopup = document.querySelector(".design-popup-cont");
const videoBtn = document.querySelector("#video-btn");
const webDevBtn = document.querySelector("#web-dev-btn");
const designBtn = document.querySelector("#design-btn");

// EVENT LISTENERS

videoBtn.addEventListener("click", popup1);
webDevBtn.addEventListener("click", popup2);
designBtn.addEventListener("click", popup3);

// FUNCTIONS

function popup1() {
  videoPopup.classList.add("active");
  //body.style.overflowY = "hidden";
  const exitPopup = document.querySelector(".video-exit-popup");
  exitPopup.addEventListener("click", function () {
    videoPopup.classList.remove("active");
    //body.style.overflowY = "scroll";
  });
}

function popup2() {
  webDevPopup.classList.add("active");
  const exitPopup = document.querySelector(".web-dev-exit-popup");
  exitPopup.addEventListener("click", function () {
    webDevPopup.classList.remove("active");
  });
}

function popup3() {
  designPopup.classList.add("active");
  const exitPopup = document.querySelector(".design-exit-popup");
  exitPopup.addEventListener("click", function () {
    designPopup.classList.remove("active");
  });
}
