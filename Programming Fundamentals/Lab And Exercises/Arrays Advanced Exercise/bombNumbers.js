function bombNumbers(sequence, bombNumber) {

    let specialNumber = bombNumber[0];
    let power = bombNumber[1];
    let sum = 0;

    for (let i = 0; i < sequence.length; i++) {
        let currentNumber = sequence[i];

        if (currentNumber === specialNumber) {
            let index = sequence.indexOf(currentNumber);
            let startIndex = Math.max(index - power, 0);

            sequence.splice(index, power + 1);
            sequence.splice(startIndex, power);
            i = 0;
        }
    }

    for (let el of sequence) {
        sum += el;
    }

    console.log(sum);

}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
);