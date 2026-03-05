function alignTextToImage() {

  const img = document.querySelector(".bgimg");
  const name = document.querySelector(".name");
  const copyright = document.querySelector(".copyright");

  if (!img || !name || !copyright) return;

  const rect = img.getBoundingClientRect();
  const offset = 8;

  // Align left text to image edge
  name.style.left = rect.left + "px";
  name.style.bottom = (window.innerHeight - rect.bottom + offset) + "px";

  // Align right text to image edge
  copyright.style.right = (window.innerWidth - rect.right) + "px";
  copyright.style.bottom = (window.innerHeight - rect.bottom + offset) + "px";

  // Reveal text after positioning
  name.style.opacity = 1;
  copyright.style.opacity = 1;
}

function initAlignment() {

  const img = document.querySelector(".bgimg");

  if (!img) return;

  if (img.complete) {
    alignTextToImage();
  } else {
    img.addEventListener("load", alignTextToImage);
  }

}

document.addEventListener("DOMContentLoaded", () => {

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  initAlignment();

});

window.addEventListener("resize", alignTextToImage);
