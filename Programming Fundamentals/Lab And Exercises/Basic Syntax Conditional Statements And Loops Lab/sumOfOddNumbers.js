function sumOfOddNumbers(count) {

    let currentNumber = 1;
    let sum = 0;

    for (let i = 0; i < count; i++) {
        console.log(currentNumber);
        sum += currentNumber;
        currentNumber += 2;
    }

    console.log(`Sum: ${sum}`);

}

sumOfOddNumbers(3);