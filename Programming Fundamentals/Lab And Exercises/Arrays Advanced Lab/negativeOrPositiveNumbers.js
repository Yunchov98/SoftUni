function negativeOrPositiveNumbers(arrayOfStrings) {

    let arrayOfNumbers = [];

    for (let el of arrayOfStrings) {
        arrayOfNumbers.push(Number(el));
    }

    let resultArray = [];

    for (let number of arrayOfNumbers) {
        if (number < 0) {
            resultArray.unshift(number);
        } else {
            resultArray.push(number);
        }
    }

    for (let i = 0; i < resultArray.length; i++) {
        console.log(resultArray[i]);
    }

}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);