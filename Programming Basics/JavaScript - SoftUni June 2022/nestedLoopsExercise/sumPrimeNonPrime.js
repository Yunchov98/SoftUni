function sumPrimeNonPrime(input) {

    let index = 0;

    let command = input[index];
    index++;

    let primeNumbers = 0;
    let nonPrimeNumbers = 0;

    while (command !== 'stop') {
        let currentNumber = Number(command);

        if (currentNumber < 0) {
            console.log('Number is negative.');
            command = input[index];
            index++;
            continue;
        }

        if (currentNumber === 1) {
            primeNumbers += 1;
            command = input[index];
            index++;
            continue;
        }

        let isPrime = true;
        for (let i = 2; i < currentNumber; i++) {
            if (currentNumber % i === 0) {
                nonPrimeNumbers += currentNumber;
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeNumbers += currentNumber;
        }
        command = input[index];
        index++;
    }

    console.log(`Sum of all prime numbers is: ${primeNumbers}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNumbers}`);

}

sumPrimeNonPrime((["3", "9", "0", "7", "19", "4", "stop"]));