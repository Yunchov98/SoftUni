function memoryGame(array) {

    let sequence = array.shift().split(' ');

    let movesCounter = 0;

    while (sequence.length > 1 && array[0].toLowerCase() !== 'end') {
        let [firstIndex, secondIndex] = array.shift().split(' ');

        firstIndex = Number(firstIndex);
        secondIndex = Number(secondIndex);

        movesCounter++;

        if (firstIndex < 0
            || firstIndex >= sequence.length
            || firstIndex === secondIndex
            || secondIndex < 0
            || secondIndex >= sequence.length) {
            const symbol = `-${movesCounter}a`;
            const index = Math.trunc(sequence.length / 2);
            sequence.splice(index, 0, symbol, symbol);
            console.log('Invalid input! Adding additional elements to the board');
        } else {
            const firstNumber = sequence[firstIndex];
            const secondNumber = sequence[secondIndex];

            if (firstNumber === secondNumber) {
                sequence.splice(firstIndex, 1);
                secondIndex = sequence.indexOf(secondNumber);
                sequence.splice(secondIndex, 1);
                console.log(`Congrats! You have found matching elements - ${firstNumber}!`)
            } else if (firstNumber !== secondNumber) {
                console.log('Try again!');
            }
        }
    }

    if (sequence.length === 0 || sequence.length === 1) {
        console.log(`You have won in ${movesCounter} turns!`);
    } else {
        console.log('Sorry you lose :(');
        console.log(`${sequence.join(' ')}`);
    }
}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"]
);