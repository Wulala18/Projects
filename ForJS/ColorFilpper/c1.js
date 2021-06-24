



const colors = ['green', 'red', "rgba(133,122,200)", "#f15025"]
const btt = document.getElementById('btn');
const showtext = document.querySelector('.color');


btt.addEventListener('click', () => {

const arr = getRandom();

document.body.style.backgroundColor = colors[arr];
showtext.textContent = colors[arr];


});

function getRandom ()
{
    return Math.floor(Math.random() * colors.length);
}
