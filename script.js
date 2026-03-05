// script.js

const GAP_PX = 4; // <<< CHANGE THIS to control distance from image bottom (e.g. 4, 8, 12, 16)

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

  // Align to image edges
  name.style.left = `${rect.left}px`;
  name.style.bottom = `${(window.innerHeight - rect.bottom + GAP_PX)}px`;

  copyright.style.right = `${(window.innerWidth - rect.right)}px`;
  copyright.style.bottom = `${(window.innerHeight - rect.bottom + GAP_PX)}px`;

  // Reveal ONLY after positioned (no jump)
  name.style.opacity = "1";
  copyright.style.opacity = "1";
}

function initDesktopAlignment() {
  if (!isDesktop()) return;

  const img = document.querySelector(".bgimg");
  if (!img) return;

  // Run once image is ready
  const run = () => requestAnimationFrame(positionDesktopText);

  if (img.complete) {
    run();
  } else {
    img.addEventListener("load", run, { once: true });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setYear();

  // Mobile: do nothing (CSS keeps centered text and it’s visible)
  if (!isDesktop()) return;

  initDesktopAlignment();
});

// Keep it aligned if the window changes
window.addEventListener("resize", () => {
  if (!isDesktop()) return;
  positionDesktopText();
});
