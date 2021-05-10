// SELECTORS

const mobMenuBtn = document.querySelector(".mob-menu-btn");
const mobMenuDiv = document.querySelector(".mob-menu-cont");

// EVENT LISTENERS

mobMenuBtn.addEventListener("click", toggleMenu);

// FUNCTIONS

function toggleMenu() {
  if (mobMenuDiv.style.display === "flex") {
    mobMenuDiv.style.display = "none";
  } else {
    mobMenuDiv.style.display = "flex";
  }

  if (mobMenuBtn.innerHTML === '<i class="fas fa-bars"></i>') {
    mobMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    mobMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  }
}
