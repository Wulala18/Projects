const questions = document.querySelectorAll('.question');




questions.forEach((ql) => {

    const btnn = ql.querySelector('.question-btn');

    btnn.addEventListener('click', () => {

        questions.forEach((item) => {


            if(item !== ql)
            {
                item.classList.remove('show-text');
            }
            else
            {
                item.classList.add('show-text');
            }



        })


        // ql.classList.add('show-text');

    })







})