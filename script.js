let number1;
let number2;
let operator;


const display = document.querySelector('.disp');
display.textContent = '';

function cle(){
    number1 = undefined;
    number2 = undefined;
    operator = undefined;
}

function cleErro(){
    if(display.textContent == 'Error' || display.textContent == 'Infinity'){
        display.textContent = '';
        cle();
    }
}

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
    if(a == 0 && b == 0){
        return 'Error';
    }
    if(b == 0){
        return 'Infinity';
    }
    return a/b;
}

function operate(){
    
    number1 = parseFloat(number1);
    number2 = parseFloat(number2,);

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
        cleErro();
        display.textContent = ''+display.textContent+element.innerText;
    })
})


const symb = document.querySelectorAll('.symb');

const br = document.createElement("br");



symb.forEach(element => {
    element.addEventListener("click", () => {
        console.log(display.textContent);
        cleErro();
        if(operator == undefined){
            number1 = display.innerText;
            operator = element.innerText;
        }
        if(display.textContent == ''){
             cle();
        }
        display.textContent = '';
    })
})

const clear = document.querySelector('.clear');

clear.addEventListener("click", () => {
    display.textContent = '';
    cle();
})

const equals = document.querySelector('.equals');

equals.addEventListener("click", () => {
    cleErro();
    if(number1 != undefined){
        number2 = display.innerText;
        display.textContent = '';
        operate();
        cle();
    }
})

const del = document.querySelector('.del');

del.addEventListener("click", () => {
    cleErro();
    let arr = [display.textContent];
    let arrSpli = arr[0].split('');
    arrSpli.pop();
    arr = arrSpli.join('');
    display.textContent = arr;
})

const dot = document.querySelector('.dot');
let dots = 0;

dot.addEventListener("click", () => {
    cleErro();
    if(dots == 0){
        dots = 1;
        display.textContent = ''+display.textContent+dot.innerText;
    }
})
