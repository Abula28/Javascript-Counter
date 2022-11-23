let minusBtn = document.querySelector('.minus');
let plusBtn = document.querySelector('.plus');
let resetBtn = document.querySelector('.reset');
let count = document.querySelector('.count');
let counted = 0;

plusBtn.addEventListener('click', function(){
    counted++;
    count.textContent = `${counted}`
})
minusBtn.addEventListener('click', function(){
    if(count.textContent !== "0"){
        counted--;
    count.textContent = `${counted}`
    }else{
        reset();
    }
})
reset();

function reset(){
    resetBtn.addEventListener('click', function(){
        count.textContent = "0";
        counted = 0;
    })
}
