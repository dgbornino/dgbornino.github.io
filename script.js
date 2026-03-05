function alignTextToImage() {

  const img = document.querySelector(".bgimg");
  const name = document.querySelector(".name");
  const copyright = document.querySelector(".copyright");

  if (!img || !name || !copyright) return;

  const rect = img.getBoundingClientRect();

  name.style.left = rect.left + "px";
  copyright.style.right = (window.innerWidth - rect.right) + "px";

}

function initAlignment() {

  const img = document.querySelector(".bgimg");

  if (!img) return;

  // if image already cached
  if (img.complete) {
    alignTextToImage();
  } else {
    img.onload = alignTextToImage;
  }

}

// run after DOM loads
document.addEventListener("DOMContentLoaded", initAlignment);

// adjust on resize
window.addEventListener("resize", alignTextToImage);

// update copyright year
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
