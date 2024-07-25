let number1;
let number2;
let operator;


const display = document.querySelector('.disp');
display.textContent = '';

function add(a, b){
    return (a+b);
}
function subtract(a, b){
    return a-b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    if(b == 0){
        return 'Infinity'
    }
    return a/b;
}

function operate(){
    
    number1 = parseInt(number1, 10);
    number2 = parseInt(number2, 10);

    if(operator == '+'){
        display.textContent = '' + add(number1, number2);
    }else if(operator == '-'){
        display.textContent = '' + subtract(number1, number2);
    }else if(operator == '×'){
        display.textContent = '' + multiply(number1, number2);
    }else if(operator == '÷'){
        display.textContent = '' + divide(number1, number2);
    }
}





const numbers = document.querySelectorAll('.number');

// for(let i = 0; i<=9; i++){
//     numbers[i].addEventListener("click", () => {
//         display.textContent = ''+display.textContent+i;
//     });
// }

numbers.forEach(element => {
    element.addEventListener("click", () => {
        display.textContent = ''+display.textContent+element.innerText;
    })
})


const symb = document.querySelectorAll('.symb');

const br = document.createElement("br");



symb.forEach(element => {
    element.addEventListener("click", () => {
        if(operator == undefined){
            number1 = display.innerText;
            operator = element.innerText;
            display.textContent = '';
        }
    })
})

const clear = document.querySelector('.clear');

clear.addEventListener("click", () => {
    display.textContent = '';
    number1 = undefined;
    number2 = undefined;
    operator = undefined;
})

const equals = document.querySelector('.equals');

equals.addEventListener("click", () => {
    if(number1 != undefined){
        number2 = display.innerText;
        display.textContent = '';
        operate();
        number1 = undefined;
        number2 = undefined;
        operator = undefined;
    }
})
