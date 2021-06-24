const daysEl = document.getElementById('days')
const hEl = document.getElementById('hours')
const mEl = document.getElementById('mins')
const sEl = document.getElementById('seconds')

const newYears = "1 Jan 2022";

function countdown()
{
    const newYearsDate = new Date(newYears);
    const curentDate = new Date();


    const totalseconds = (newYearsDate - curentDate) / 1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600 % 24);
    const mins = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;

    daysEl.innerHTML = days;
    // hEl.innerHTML = formatDate(hours);
    // mEl.innerHTML = formatDate(mins);
    // sEl.innerHTML = formatDate(seconds);
    hEl.innerText = hours;
    mEl.innerText = mins;
    sEl.innerText = seconds;
    


}

// function formatDate(time)
// {
//     return time < 10 ?  `0${time}` : time;
// }

setInterval(countdown, 1000);