const btns = document.querySelectorAll('.btn');
const values = document.querySelector('#value');
let count = 0;




btns.forEach(test => test.addEventListener('click', ccc =>{



    const items = ccc.currentTarget.classList;

    if(items.contains('decrease'))
    {
        count--;

    }else if(items.contains('increase'))
    {
       count++;
      
    }
    else
    {
        count = 0;
    }


    if(count > 0)
    {
     values.style.color = 'green';
    }
    else if ( count < 0)
    {
        values.style.color = 'red';

    }
    else (count === 0)
    {
        values.style.color = 'white';
    }

    values.textContent = count;




}));
