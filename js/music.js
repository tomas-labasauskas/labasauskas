const playBtn = document.querySelector(".play-btn");
const soundrtack = new Audio("../life.mp3");

playBtn.addEventListener("click", function () {
  if (playBtn.classList.contains("active")) {
    playBtn.classList.remove("active");
    playBtn.innerHTML = 'PLAY <i class="fa-solid fa-play"></i>';
    soundrtack.pause();
  } else {
    playBtn.classList.add("active");
    playBtn.innerHTML = 'PAUSE <i class="fa-solid fa-pause"></i>';
    soundrtack.play();
  }
});
