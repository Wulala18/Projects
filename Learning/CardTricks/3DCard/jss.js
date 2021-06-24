

const containers = document.querySelector(".container")
const cards = document.querySelector(".card")


const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".sneaker-info h3");
const sizes = document.querySelector(".sizes");

containers.addEventListener("mousemove", (e) => {

let XAis = (window.innerHeight / 2 - e.pageX) /25;
let YAis = (window.innerWidth / 2 - e.pageY) / 25;
cards.style.transform = `rotateY(${XAis}deg) rotateX(${YAis}deg)`;
});


containers.addEventListener("mouseenter", (e) => {
cards.style.transform = "none";

title.style.transform = "translateZ(150px)";
sneaker.style.transform = "translateZ(150px) rotateZ(-45deg)";
description.style.transform = "translateZ(125px)";
sizes.style.transform = "translateZ(100px)";
purchase.style.transform = "translateZ(75px)";

});

containers.addEventListener("mouseleave", (e) => {
  cards.style.transition = "all 0.5s ease";
  cards.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});