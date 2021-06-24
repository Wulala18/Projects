const stars = document.querySelectorAll("#star");

stars.forEach((star) => {
  let duration = Math.random() * (8.8 - 5.6) + 5.6;
  star.style.animation = `stars ${duration}s infinite linear`;
});

window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("preload-finish");
});
