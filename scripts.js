

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