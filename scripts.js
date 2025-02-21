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
const history = document.querySelector('#historyText');

let displayArray = [];
let currentNumber = '';
// write a function to change the display of the calculator and when an operator is selected push the current 
// display into an array along with the operator pushed
function equate(e) {
    
    let length = display.textContent.length;
    let pushed = e.target.textContent;
    if (pushed == 'C') {
        currentNumber = '';
        display.textContent = '';
        displayArray = [];
        history.textContent = '';

    } else if(pushed == '=') {
        displayArray.push(display.textContent, pushed);
        displayArray.splice(-1,1);
        console.log(displayArray);
        for (char of displayArray) {
            let operator = displayArray.find((element) => element == 'x' | element == '/');
            let index = displayArray.findIndex((element) => element == 'x' || element == '/');
                if (operator == 'x') {
                    firstNumber = displayArray[index - 1];
                    secondNumber = displayArray[index + 1];
                    let answer = firstNumber * secondNumber;
                    console.log(answer);
                    displayArray.splice(firstNumber, 3, answer);
                } else if (operator == '/') {
                    firstNumber = displayArray[index - 1];
                    secondNumber = displayArray[index + 1];
                    console.log(firstNumber);
                    console.log(secondNumber);
                    let answer = firstNumber / secondNumber;
                    console.log(answer);
                    displayArray.splice(firstNumber, 3, answer);
                }
        }
    } else if (pushed == '+' || pushed == '-' || pushed == 'x' || pushed == '/' ) {
        // function should push the currentDisplay variable and the operator pushed into an array
        // reset currentNumber to '' but keep display.textContent the same
        if (currentNumber == '') {
            return false
        } else {
            displayArray.push(display.textContent, pushed);
            const historyNumber = document.createElement('p');
            historyNumber.textContent = `${currentNumber}`;
            history.appendChild(historyNumber);
            const historyOperator = document.createElement('p');
            historyOperator.textContent = `${pushed}`;
            history.appendChild(historyOperator);
            display.textContent = '';
            currentNumber = '';
        }
    } else {
        if (displayArray.length > 12){
            display.textContent = 'ERROR';
        } else if (length >= 18) {
            display.textContent = 'OVER MAX CHARS';
         
        } else if (isNaN(display.textContent) == true) {
            display.textContent = 'ERROR';
        } else if (pushed.length > 1) {
            return false;
        } else {
            display.textContent += `${pushed}`;
            currentNumber += pushed;
            console.log(currentNumber);
        }
    }
   
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