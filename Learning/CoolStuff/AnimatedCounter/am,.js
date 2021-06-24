const counters = document.querySelectorAll(".counter");
const speed = 200;

counters.forEach(ul =>{


    const counteupdate = () => {

        const target = +ul.getAttribute('data-target');
        const count = +ul.innerText;


        const ell = target / speed;


        if(count < target)
        {
            ul.innerText = count + ell;
            setTimeout(counteupdate,1);
        }
        else
        {
            count.innerText = target;
        }

    }

    counteupdate();


});