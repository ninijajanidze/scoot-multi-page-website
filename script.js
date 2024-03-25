
const menuBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".mobile-menu");
const menuCloseBtn = document.querySelector(".close");

menuBtn.addEventListener("click", () => {
  menu.classList.add("full-menu")
  
});

menuCloseBtn.addEventListener("click", () => {
    menu.classList.remove("full-menu")
    
});