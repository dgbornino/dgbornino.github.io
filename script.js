function alignTextToImage() {

  const img = document.querySelector(".bgimg");
  const name = document.querySelector(".name");
  const copyright = document.querySelector(".copyright");

  if (!img) return;

  const rect = img.getBoundingClientRect();

  name.style.left = rect.left + "px";
  copyright.style.right = (window.innerWidth - rect.right) + "px";

}

// run after image loads
window.addEventListener("load", alignTextToImage);

// adjust if screen resizes
window.addEventListener("resize", alignTextToImage);

// update year
document.getElementById("year").textContent = new Date().getFullYear();
