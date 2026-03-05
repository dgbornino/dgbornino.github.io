function isDesktop() {
  return window.innerWidth >= 769;
}

function alignTextToImage() {

  if (!isDesktop()) return;

  const img = document.querySelector(".bgimg");
  const name = document.querySelector(".name");
  const copyright = document.querySelector(".copyright");

  if (!img || !name || !copyright) return;

  const rect = img.getBoundingClientRect();
  const offset = 8;

  name.style.left = rect.left + "px";
  name.style.bottom = (window.innerHeight - rect.bottom + offset) + "px";

  copyright.style.right = (window.innerWidth - rect.right) + "px";
  copyright.style.bottom = (window.innerHeight - rect.bottom + offset) + "px";

  name.style.opacity = 1;
  copyright.style.opacity = 1;
}

function initAlignment() {

  if (!isDesktop()) {
    document.querySelector(".name").style.opacity = 1;
    document.querySelector(".copyright").style.opacity = 1;
    return;
  }

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
