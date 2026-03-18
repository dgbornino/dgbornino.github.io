const GAP_PX = 16;

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

  // Reset first so we get the natural centered position
  img.style.marginTop = '0px';

  requestAnimationFrame(() => {
    const rect = img.getBoundingClientRect();
    const textHeight = Math.max(name.offsetHeight, copyright.offsetHeight);
    const totalHeight = rect.height + GAP_PX + textHeight;
    const topOffset = (window.innerHeight - totalHeight) / 2;
    const shift = topOffset - rect.top;

    img.style.marginTop = shift + 'px';

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
  });
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
