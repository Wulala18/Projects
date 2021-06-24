const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";


function loweralp()
{
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function upperalp()
{
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function numberss()
{
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function symbolsss()
{
    return symbols[Math.floor(Math.random() * symbols.length)];
}


function generatePss()
{
        const len = lenEl.value;
       let passs = "";

       if(upperEl.checked)
       {
           passs += upperalp();
       }

       if(lowerEl.checked)
    {
        passs += loweralp();
    }

        if(numberEl.checked)
        {
            passs += numberss();
        }

        if(symbolEl.checked)
        {
            passs += symbolsss();
        }

        for(let i = passs.length; i<len; i++)
        {
            const x = generateX();
            passs += x;
        }

     
        pwEl.innerText = passs;


}


function generateX()
{
    const xs = [];
    if(upperEl.checked)
    {
        xs.push(upperalp());
    }

    if (lowerEl.checked) {
        xs.push(loweralp());
    }

    if (numberEl.checked) {
        xs.push(numberss());
    }

    if (symbolEl.checked) {
        xs.push(symbolsss());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener('click',generatePss);

copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pwEl.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});