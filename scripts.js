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
        const historyNumber = document.createElement('p');
        historyNumber.textContent = `${currentNumber}`;
        history.appendChild(historyNumber);
        for (char of displayArray) {
            let multiplyOrDivide = displayArray.find((element) => element == 'x' || element == '/');
            let addOrSubtract = displayArray.find((element) => element == '+' || element == '-');
            let indexFirst = displayArray.findIndex((element) => element == 'x' || element == '/');
            let indexSecond = displayArray.findIndex((element) => element == '+' || element == '-');
             if (multiplyOrDivide == 'x') {
                    firstNumber = displayArray[indexFirst - 1];
                    secondNumber = displayArray[indexFirst + 1];
                    let answer = firstNumber * secondNumber;
                    displayArray.splice((indexFirst - 1), 3, answer);
                } else if (multiplyOrDivide == '/') {
                    firstNumber = displayArray[indexFirst - 1];
                    secondNumber = displayArray[indexFirst + 1];
                    let answer = firstNumber / secondNumber;
                    displayArray.splice((indexFirst - 1), 3, answer);
                } else if (addOrSubtract == '+') {
                    firstNumber = displayArray[indexSecond - 1];
                    secondNumber = displayArray[indexSecond + 1];
                    let answer = +firstNumber + +secondNumber;
                    displayArray.splice((indexSecond - 1), 3, answer);
                } else if (addOrSubtract == '-') {
                    firstNumber = displayArray[indexSecond - 1];
                    secondNumber = displayArray[indexSecond + 1];
                    let answer = firstNumber - secondNumber;
                    displayArray.splice((indexSecond - 1), 3, answer);
                } 

            display.textContent = displayArray[0];
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
        }
    }
   
}

buttonContainer.addEventListener('click', equate);