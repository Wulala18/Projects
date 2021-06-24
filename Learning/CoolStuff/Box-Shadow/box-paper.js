

const modal = document.querySelector(".modal")
const modalToggle = document.querySelector('button')

modalToggle.addEventListener('click', () => {
    modal.classList.add('is-open')
  })
  
  modal.addEventListener('click', () => {
    modal.classList.remove('is-open')
  })
