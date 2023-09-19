function sumDigits(number) {

    let numberAsString = number.toString();
    let currentLength = numberAsString.length;
    let sum = 0;

    for (let currentNumber = 0; currentNumber < currentLength; currentNumber++) {
        let currentDigit = Number(numberAsString[currentNumber]);
        sum += currentDigit;
    }

    console.log(sum);

}

sumDigits(245678);