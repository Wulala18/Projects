const menubtn = document.querySelector(".menu-btn");
const  menulinks = document.querySelector(".menu-links");
const  menuitem = document.querySelectorAll(".menu-item");

menubtn.addEventListener("click", () => {
    toggle();
  });
  
  // toggle on item click if open
  menuitem.forEach((item) => {
    item.addEventListener("click", () => {
      if (menubtn.classList.contains("open")) {
        toggle();
      }
    });
  });

  function toggle() {
    menubtn.classList.toggle("open");
    menulinks.classList.toggle("open");
  }
  