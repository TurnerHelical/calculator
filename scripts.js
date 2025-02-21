//take user input when pressing buttons
//make the display of the calculator show the entered numbers and operators for the current operation
//when equal is selected the calculator finds the solution for the given numbers and operators
    // operators will be add, subtract, multiply, divide, and an equals button
//the answer is then displayed to the calculator
// the user can keep putting in new numbers and operators and the calculator will keep the answer 


// add eventlistener to buttonContainer
// set up event delegation to only perform the action of the button clicked
const buttonContainer = document.querySelector('#buttonContainer');
const display = document.querySelector('#display');

let displayArray = [];

// write a function to change the display of the calculator and when an operator is selected push the current 
// display into an array along with the operator pushed
function equate(e) {
    let currentDisplay = '';
    let length = display.textContent.length;
    let number = e.target.textContent
    if (number == 'C') {
        currentDisplay = '';
        display.textContent = '';
        displayArray = [];
    }
    else {
        if (displayArray.length > 9){
            display.textContent = 'ERROR'
        } else if (length > 10) {
            display.textContent = 'OVER MAX CHARS'
         
        } else if (isNaN(display.textContent) == true) {
            display.textContent = 'ERROR'
        
        } else {
            display.textContent += `${number}`;
            currentDisplay = display.textContent;
            console.log(currentDisplay);
        }
    }
    // } else if(e.target.matches('#2')) {
    //     if (displayArray.length > 9){
    //         display.textContent = 'ERROR'
    //     } else if (length > 10) {
    //         display.textContent = 'OVER MAX CHARS'
    //     } else {
    //         display.textContent += '1';
    //         currentDisplay = display.textContent;
    //         console.log(currentDisplay);
    //     }
    // } else if (e.target.matches('#3')) {
    //     if (displayArray.length > 9){
    //         display.textContent = 'ERROR'
    //     } else if (length > 10) {
    //         display.textContent = 'OVER MAX CHARS'
    //     } else {
    //         display.textContent += '1';
    //         currentDisplay = display.textContent;
    //         console.log(currentDisplay);
    //     }
    // } else if (e.target.matches('#4')) {
    //     if (displayArray.length > 9){
    //         display.textContent = 'ERROR'
    //     } else if (length > 10) {
    //         display.textContent = 'OVER MAX CHARS'
    //     } else {
    //         display.textContent += '1';
    //         currentDisplay = display.textContent;
    //         console.log(currentDisplay);
    //     }
    // } else if (e.target.matches('#5')) {
    //     if (displayArray.length > 9){
    //         display.textContent = 'ERROR'
    //     } else if (length > 10) {
    //         display.textContent = 'OVER MAX CHARS'
    //     } else {
    //         display.textContent += '1';
    //         currentDisplay = display.textContent;
    //         console.log(currentDisplay);
    //     }
    // } else if (e.target.matches('#6')) {
    //     if (displayArray.length > 9){
    //         display.textContent = 'ERROR'
    //     } else if (length > 10) {
    //         display.textContent = 'OVER MAX CHARS'
    //     } else {
    //         display.textContent += '1';
    //         currentDisplay = display.textContent;
    //         console.log(currentDisplay);
    //     }
    // } else if (e.target.matches('#7')) {
    //     if (displayArray.length > 9){
    //         display.textContent = 'ERROR'
    //     } else if (length > 10) {
    //         display.textContent = 'OVER MAX CHARS'
    //     } else {
    //         display.textContent += '1';
    //         currentDisplay = display.textContent;
    //         console.log(currentDisplay);
    //     }
    // } else if (e.target.matches('#8')) {
    //     if (displayArray.length > 9){
    //         display.textContent = 'ERROR'
    //     } else if (length > 10) {
    //         display.textContent = 'OVER MAX CHARS'
    //     } else {
    //         display.textContent += '1';
    //         currentDisplay = display.textContent;
    //         console.log(currentDisplay);
    //     }
    // } else if (e.target.matches('#9')) {
    //     if (displayArray.length > 9){
    //         display.textContent = 'ERROR'
    //     } else if (length > 10) {
    //         display.textContent = 'OVER MAX CHARS'
    //     } else {
    //         display.textContent += '1';
    //         currentDisplay = display.textContent;
    //         console.log(currentDisplay);
    //     }
    // } else if (e.target.matches('#0')) {
    //     if (displayArray.length > 9){
    //         display.textContent = 'ERROR'
    //     } else if (length > 10) {
    //         display.textContent = 'OVER MAX CHARS'
    //     } else {
    //         display.textContent += '1';
    //         currentDisplay = display.textContent;
    //         console.log(currentDisplay);
    //     }
    // } else if (e.target.matches('#decimal')) {
    //     if (displayArray.length > 9){
    //         display.textContent = 'ERROR'
    //     } else if (length > 10) {
    //         display.textContent = 'OVER MAX CHARS'
    //     } else {
    //         display.textContent += '1';
    //         currentDisplay = display.textContent;
    //         console.log(currentDisplay);
    //     }
    // } else if (e.target.matches('#clear')) {
    //     if (displayArray.length > 9){
    //         display.textContent = 'ERROR'
    //     } else if (length > 10) {
    //         display.textContent = 'OVER MAX CHARS'
    //     } else {
    //         display.textContent += '1';
    //         currentDisplay = display.textContent;
    //         console.log(currentDisplay);
    //     }
    // }
}

buttonContainer.addEventListener('click', equate)

function add(number1,...numbers) {
    let answer = number1;
    for (num of numbers) {
        answer += num;
    }
    return answer
}

function subtract(number1,...numbers) {
    let answer = number1;
    for (num of numbers) {
        answer -= num;
    }
    return answer;
}

function multiply(number1,...numbers) {
    let answer = number1;
    for (num of numbers) {
        answer *= num;
    }
    return answer;
}


function divide(number1,...numbers) {
    let answer = number1;
    for (num of numbers) {
        answer /= num;
    }
    let twoDecimals = answer.toFixed(2);
    let finalAnswer = Number(twoDecimals);
    return finalAnswer;
}

let total1 = add(1,2,3,4,5);
let total2 = subtract(10,5,2);
let total3 = multiply(2,2,2);
let total4 = divide(10,2,3);

console.log(total1,total2,total3,total4);