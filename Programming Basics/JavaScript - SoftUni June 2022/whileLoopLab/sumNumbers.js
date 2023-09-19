function sumNumbers(input) {

    let index = 0;

    let number = Number(input[index]);
    index++;
    let currentNumber = Number(input[index]);

    let sum = 0;

    while (sum < number) {
        currentNumber = Number(input[index]);
        index++;
        sum += currentNumber;
    }

    console.log(sum);

}

sumNumbers(["100", "10", "20", "30", "40"]);