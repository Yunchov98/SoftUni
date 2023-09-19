function sumFirstAndLast(arrayOfStrings) {

    let arrayOfNumbers = [];

    for (let el of arrayOfStrings) {
        arrayOfNumbers.push(Number(el));
    }

    let firstNumber = arrayOfNumbers[0];
    let lastNumber = arrayOfNumbers.pop();

    console.log(firstNumber + lastNumber);

}

sumFirstAndLast(['20', '30', '40']);