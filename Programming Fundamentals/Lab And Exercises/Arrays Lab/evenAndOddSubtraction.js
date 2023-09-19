function evenAndOddSubtraction(array) {

    let evenSum = 0;
    let oddSum = 0;

    for (let currentNumber of array) {
        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }
    }

    console.log(evenSum - oddSum);

}

evenAndOddSubtraction([3,5,7,9]);