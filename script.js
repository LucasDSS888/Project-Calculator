let number1;
let number2;
let operator;
let charCode = 0;


const display = document.querySelector('.disp');
display.textContent = '';

function cle(){
    number1 = undefined;
    number2 = undefined;
    operator = undefined;
}

function cleErro(){
    if(display.textContent == 'Error' || display.textContent == 'Infinity'){
        display.value = '';
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
        display.value = '' + add(number1, number2);
    }else if(operator == '-'){
        display.value = '' + subtract(number1, number2);
    }else if(operator == '×'){
        display.value = '' + multiply(number1, number2);
    }else if(operator == '÷'){
        display.value = '' + divide(number1, number2);
    }
}

function isNumberKey(evt) {
    charCode = (evt.which) ? evt.which : evt.keyCode
    console.log(charCode);
    if(charCode == 47 || charCode == 42 || charCode == 43 || charCode == 45){
        cleErro();
        if(operator == undefined){
            number1 = display.value;
            switch(charCode) {
                case 47:
                    operator = '÷';
                  break;
                case 42:
                    operator = '×';
                  break;
                case 43:
                    operator = '+';
                  break;
                  case 45:
                    operator = '-';
                  break;
              }
        }
        if(display.value == ''){
             cle();
        }
        display.value = '';
    }
    if(charCode == 13){
        cleErro();
        if(number1 != undefined){
            number2 = display.value;
            display.value = '';
            operate();
            cle();
        }
    }
    if (charCode > 31 && (charCode != 46 &&(charCode < 48 || charCode > 57)))
      return false;
    if(thereIsDot() && charCode == 46)
        return false;
    return true;
    
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
        // display.textContent = ''+display.textContent+element.innerText;
        display.value = ''+display.value+element.innerText;
    })
})


const symb = document.querySelectorAll('.symb');

const br = document.createElement("br");




symb.forEach(element => {
    element.addEventListener("click", () => {
        cleErro();
        if(operator == undefined){
            number1 = display.value;
            operator = element.innerText;
        }
        if(display.value == ''){
             cle();
        }
        display.value = '';
    })
})

const clear = document.querySelector('.clear');

clear.addEventListener("click", () => {
    display.value = '';
    cle();
})


const equals = document.querySelector('.equals');

equals.addEventListener("click", () => {
    cleErro();
    if(number1 != undefined){
        number2 = display.value;
        display.value = '';
        operate();
        cle();
    }
})

const del = document.querySelector('.del');

del.addEventListener("click", () => {
    cleErro();
    let arr = [display.value];
    let arrSpli = arr[0].split('');
    arrSpli.pop();
    arr = arrSpli.join('');
    display.value = arr;
})


function thereIsDot(){
    let arr = [display.value];
    let arrSpli = arr[0].split('');
    if(arrSpli.includes('.')){
        return true;
    }
    return false;
}

const dot = document.querySelector('.dot');

dot.addEventListener("click", () => {
    cleErro();
    if(!(thereIsDot())){
        display.value = ''+display.value+dot.innerText;
    }
})

