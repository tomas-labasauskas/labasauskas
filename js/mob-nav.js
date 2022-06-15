const navBtn = document.querySelector(".mob-nav-btn");
const mobNav = document.querySelector(".mob-nav");

navBtn.addEventListener("click", function () {
  if (mobNav.classList.contains("active")) {
    mobNav.style.display = "none";
    mobNav.classList.remove("active");
    navBtn.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
  } else {
    mobNav.style.display = "block";
    mobNav.classList.add("active");
    navBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  }
});
