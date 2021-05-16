const backBtn = document.querySelector("#go-back");

backBtn.addEventListener("click", goBack);

setTimeout(goBack, 3000);

function goBack() {
  window.history.back();
}
