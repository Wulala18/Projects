const modal = document.querySelector(".modal");
const buttons = document.querySelector("button");


buttons.addEventListener('click', ()=>{

  modal.classList.add("open-file")


});

modal.addEventListener('click', ()=>{

  modal.classList.remove('open-file')
})