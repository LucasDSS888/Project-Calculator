let number1;
let number2;
let operator;
let strCal = '2/3';



function add(a, b){
    return a+b;
}
function subtract(a, b){
    return a-b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    return a/b;
}

function operate(){
    let arrCal = strCal.split('');
    number1 = +arrCal[0];
    operator = arrCal[1];
    number2 = +arrCal[2];

    if(operator == '+'){
        console.log(add(number1, number2));
    }else if(operator == '-'){
        console.log(subtract(number1, number2));
    }else if(operator == '*'){
        console.log(multiply(number1, number2));
    }else if(operator == '/'){
        console.log(divide(number1, number2));
    }
}

operate();