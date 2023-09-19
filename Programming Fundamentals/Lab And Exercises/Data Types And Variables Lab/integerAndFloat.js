function integerAndFloat(firstNumber, secondNumber, thirdNumber) {

    let sum = firstNumber + secondNumber + thirdNumber;
    let output = Number.isInteger(sum) ? `${sum} - Integer` : `${sum} - Float`;

    console.log(output);

}

integerAndFloat(100, 200, 303);