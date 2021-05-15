// SELECTORS

const body = document.getElementsByTagName("BODY")[0];
const videoPopup = document.querySelector(".video-popup-cont");
const webDevPopup = document.querySelector(".web-dev-popup-cont");
const designPopup = document.querySelector(".design-popup-cont");
const photographyPopup = document.querySelector(".photography-popup-cont");
const excelPopup = document.querySelector(".excel-popup-cont");
const marketingPopup = document.querySelector(".marketing-popup-cont");
const runningPopup = document.querySelector(".running-popup-cont");
const tennisPopup = document.querySelector(".tennis-popup-cont");
const musicPopup = document.querySelector(".music-popup-cont");

const videoBtn = document.querySelector("#video-btn");
const webDevBtn = document.querySelector("#web-dev-btn");
const designBtn = document.querySelector("#design-btn");
const photographyBtn = document.querySelector("#photography-btn");
const excelBtn = document.querySelector("#excel-btn");
const marketingBtn = document.querySelector("#marketing-btn");
const runningBtn = document.querySelector("#running-btn");
const tennisBtn = document.querySelector("#tennis-btn");
const musicBtn = document.querySelector("#music-btn");

// EVENT LISTENERS

videoBtn.addEventListener("click", popup1);
webDevBtn.addEventListener("click", popup2);
designBtn.addEventListener("click", popup3);
photographyBtn.addEventListener("click", popup4);
excelBtn.addEventListener("click", popup5);
marketingBtn.addEventListener("click", popup6);
runningBtn.addEventListener("click", popup7);
tennisBtn.addEventListener("click", popup8);
musicBtn.addEventListener("click", popup9);

// FUNCTIONS

function popup1() {
  videoPopup.classList.add("active");
  //body.style.overflowY = "hidden";
  const exitPopup = document.querySelector(".video-exit-popup");
  exitPopup.addEventListener("click", function () {
    videoPopup.classList.remove("active");
    //body.style.overflowY = "scroll";
  });
  const exitBack = document.querySelector(".video-exit-back");
  exitBack.addEventListener("click", function () {
    videoPopup.classList.remove("active");
  });
}

function popup2() {
  webDevPopup.classList.add("active");
  const exitPopup = document.querySelector(".web-dev-exit-popup");
  exitPopup.addEventListener("click", function () {
    webDevPopup.classList.remove("active");
  });
  const exitBack = document.querySelector(".web-dev-exit-back");
  exitBack.addEventListener("click", function () {
    webDevPopup.classList.remove("active");
  });
}

function popup3() {
  designPopup.classList.add("active");
  const exitPopup = document.querySelector(".design-exit-popup");
  exitPopup.addEventListener("click", function () {
    designPopup.classList.remove("active");
  });
  const exitBack = document.querySelector(".design-exit-back");
  exitBack.addEventListener("click", function () {
    designPopup.classList.remove("active");
  });
}

function popup4() {
  photographyPopup.classList.add("active");
  const exitPopup = document.querySelector(".photography-exit-popup");
  exitPopup.addEventListener("click", function () {
    photographyPopup.classList.remove("active");
  });
  const exitBack = document.querySelector(".photography-exit-back");
  exitBack.addEventListener("click", function () {
    photographyPopup.classList.remove("active");
  });
}

function popup5() {
  excelPopup.classList.add("active");
  const exitPopup = document.querySelector(".excel-exit-popup");
  exitPopup.addEventListener("click", function () {
    excelPopup.classList.remove("active");
  });
  const exitBack = document.querySelector(".excel-exit-back");
  exitBack.addEventListener("click", function () {
    excelPopup.classList.remove("active");
  });
}

function popup6() {
  marketingPopup.classList.add("active");
  const exitPopup = document.querySelector(".marketing-exit-popup");
  exitPopup.addEventListener("click", function () {
    marketingPopup.classList.remove("active");
  });
  const exitBack = document.querySelector(".marketing-exit-back");
  exitBack.addEventListener("click", function () {
    marketingPopup.classList.remove("active");
  });
}

function popup7() {
  runningPopup.classList.add("active");
  const exitPopup = document.querySelector(".running-exit-popup");
  exitPopup.addEventListener("click", function () {
    runningPopup.classList.remove("active");
  });
  const exitBack = document.querySelector(".running-exit-back");
  exitBack.addEventListener("click", function () {
    runningPopup.classList.remove("active");
  });
}

function popup8() {
  tennisPopup.classList.add("active");
  const exitPopup = document.querySelector(".tennis-exit-popup");
  exitPopup.addEventListener("click", function () {
    tennisPopup.classList.remove("active");
  });
  const exitBack = document.querySelector(".tennis-exit-back");
  exitBack.addEventListener("click", function () {
    tennisPopup.classList.remove("active");
  });
}

function popup9() {
  musicPopup.classList.add("active");
  const exitPopup = document.querySelector(".music-exit-popup");
  exitPopup.addEventListener("click", function () {
    musicPopup.classList.remove("active");
  });
  const exitBack = document.querySelector(".music-exit-back");
  exitBack.addEventListener("click", function () {
    musicPopup.classList.remove("active");
  });
}
