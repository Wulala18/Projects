

/*const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random()*number);
}


function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener('click', bgChange);*/




/*const btnbtn = document.querySelector('button');

function random(number)
{
    return Math.floor(Math.random() * number);
}



btnbtn.addEventListener('click', ()=>
{

    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
});*/

const newlist = querySelector('.namee-list');
const listinput = querySelector(".list-put");
const btnclick = querySelector(".addlistbtn");

btnclick.addEventListener('click', function() {

  var node= document.createElement("LI");
  var Wa = document.createTextNode(listinput.value);
  node.appendChild(Wa);

  newlist.appendChild(Wa);

  

});


