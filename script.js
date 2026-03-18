const GAP_PX = 32; // distance between image bottom and text (change this)

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

  const y = rect.bottom + GAP_PX;

  name.style.left = rect.left + "px";
  name.style.top = y + "px";

  copyright.style.right = (window.innerWidth - rect.right) + "px";
  copyright.style.top = y + "px";

  name.style.opacity = "1";
  copyright.style.opacity = "1";
}

function initDesktopAlignment() {
  if (!isDesktop()) return;

  const img = document.querySelector(".bgimg");
  if (!img) return;

  const run = () => requestAnimationFrame(positionDesktopText);

  if (img.complete) run();
  else img.addEventListener("load", run, { once: true });
}

document.addEventListener("DOMContentLoaded", () => {
  setYear();
  initDesktopAlignment();
});

window.addEventListener("resize", positionDesktopText);
