
function agedays()
{
var ask = prompt("What is Your Age ah?");
var timee = (2020 - ask) * 365;
var h1 = document.createElement('h1');
var textaan = document.createTextNode("Your age is: " + timee + " Born");
h1.setAttribute('id', 'timee');
h1.appendChild(textaan);

document.getElementById('flexresult').appendChild(h1);
}


function reset()
{
        document.getElementById('timee').remove();

}

