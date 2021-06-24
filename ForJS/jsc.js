function checklabel(labelID, input)
{
    let label = document.getElementById(labelID);
    input = input;


    if(input.value != "")
    {
        if(!label.classList.contains('label-active'))
        label.classList.add('label-active');

    }else{

        label.classList.remove('label-active');
    }
}



let numberss = [5,10,2,3,4,5,6,7,12];
console.log(numberss.sort(function(a,b){return a-b}));
console.log(numberss.sort(function(a,b){return b-a}));
