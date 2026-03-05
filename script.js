const GAP_PX = 4; // distance between image and text

function isDesktop() {
  return window.innerWidth >= 769;
}

function setYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

function positionDesktopText() {

  if (!isDesktop()) return;

  const img = document.querySelector(".bgimg");
  const name = document.querySelector(".name");
  const copyright = document.querySelector(".copyright");

  if (!img || !name || !copyright) return;

  const rect = img.getBoundingClientRect();

  /* left text */
  name.style.left = rect.left + "px";
  name.style.top = rect.bottom + GAP_PX + "px";

  /* right text */
  copyright.style.right = (window.innerWidth - rect.right) + "px";
  copyright.style.top = rect.bottom + GAP_PX + "px";

  name.style.opacity = "1";
  copyright.style.opacity = "1";
}

function initDesktopAlignment() {

  if (!isDesktop()) return;

  const img = document.querySelector(".bgimg");
  if (!img) return;

  const run = () => requestAnimationFrame(positionDesktopText);

  if (img.complete) {
    run();
  } else {
    img.addEventListener("load", run, { once: true });
  }

}

document.addEventListener("DOMContentLoaded", () => {

  setYear();

  if (!isDesktop()) return;

  initDesktopAlignment();

});

window.addEventListener("resize", positionDesktopText);
