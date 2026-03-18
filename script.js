function setYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}
document.addEventListener("DOMContentLoaded", setYear);
