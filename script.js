// script.js
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("toggle-theme");
  button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
