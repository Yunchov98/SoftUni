function palindromeIntegers(numbers) {

    let numbersLength = numbers.length;

    for (let i = 0; i < numbersLength; i++) {
        let currentNumber = String(numbers[i]);
        let reversedNumber = currentNumber.split('').reverse().join('');

        if (currentNumber === reversedNumber) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

palindromeIntegers([123, 323, 421, 121]);
