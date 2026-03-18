const GAP_PX = 32;

function isDesktop() {
  return window.innerWidth >= 769;
}

function setYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

function positionAll() {
  if (!isDesktop()) return;
  const img = document.querySelector(".bgimg");
  const name = document.querySelector(".name");
  const copyright = document.querySelector(".copyright");
  if (!img || !name || !copyright) return;

  const imgW = img.offsetWidth;
  const imgH = img.offsetHeight;
  const textH = Math.max(name.offsetHeight, copyright.offsetHeight);
  const totalH = imgH + GAP_PX + textH;

  const topStart = (window.innerHeight - totalH) / 2;
  const leftStart = (window.innerWidth - imgW) / 2;

  // Position image
  img.style.top = topStart + 'px';
  img.style.left = leftStart + 'px';
  img.style.transform = 'none';

  // Position text
  const textY = topStart + imgH + GAP_PX;
  name.style.top = textY + 'px';
  name.style.left = leftStart + 'px';
  copyright.style.top = textY + 'px';
  copyright.style.right = leftStart + 'px';
  copyright.style.left = 'auto';

  name.style.opacity = '1';
  copyright.style.opacity = '1';
}

function init() {
  if (!isDesktop()) return;
  const img = document.querySelector(".bgimg");
  if (!img) return;
  if (img.complete) requestAnimationFrame(positionAll);
  else img.addEventListener("load", () => requestAnimationFrame(positionAll), { once: true });
}

document.addEventListener("DOMContentLoaded", () => {
  setYear();
  init();
});

window.addEventListener("resize", positionAll);
