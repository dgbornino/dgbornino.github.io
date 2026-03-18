const GAP_PX = 32;

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
  const textHeight = Math.max(name.offsetHeight, copyright.offsetHeight);
  const totalBlock = rect.height + GAP_PX + textHeight;
  const topStart = (window.innerHeight - totalBlock) / 2;
  const currentMargin = parseFloat(img.style.marginTop) || 0;
  const newMargin = currentMargin + (topStart - rect.top);
  img.style.marginTop = newMargin + 'px';

  requestAnimationFrame(() => {
    const r = img.getBoundingClientRect();
    const textY = r.bottom + GAP_PX;
    name.style.left = r.left + 'px';
    name.style.top = textY + 'px';
    copyright.style.right = (window.innerWidth - r.right) + 'px';
    copyright.style.top = textY + 'px';
    name.style.opacity = '1';
    copyright.style.opacity = '1';
  });
}

function initDesktopAlignment() {
  if (!isDesktop()) return;
  const img = document.querySelector(".bgimg");
  if (!img) return;
  img.style.marginTop = '0px';
  const run = () => requestAnimationFrame(positionDesktopText);
  if (img.complete) run();
  else img.addEventListener("load", run, { once: true });
}

document.addEventListener("DOMContentLoaded", () => {
  setYear();
  initDesktopAlignment();
});

window.addEventListener("resize", () => {
  const img = document.querySelector(".bgimg");
  if (img) img.style.marginTop = '0px';
  positionDesktopText();
});
