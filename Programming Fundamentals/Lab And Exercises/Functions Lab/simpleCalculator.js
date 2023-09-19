function simpleCalculator(firstNumber, secondNumber, operator) {

    let addNumbers = (firstNumber, secondNumber) => firstNumber + secondNumber;
    let subtractNumbers = (firstNumber, secondNumber) => firstNumber - secondNumber;
    let multiplyNumbers = (firstNumber, secondNumber) => firstNumber * secondNumber;
    let divideNumbers = (firstNumber, secondNumber) => firstNumber / secondNumber;

    switch (operator) {
        case 'add': return addNumbers(firstNumber, secondNumber);
        case 'subtract': return subtractNumbers(firstNumber, secondNumber);
        case 'multiply': return multiplyNumbers(firstNumber, secondNumber);
        case 'divide': return divideNumbers(firstNumber, secondNumber);
    }

}

(5, 5, 'multiply');
