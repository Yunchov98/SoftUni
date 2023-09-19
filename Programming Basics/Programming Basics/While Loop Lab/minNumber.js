function minNumber(input) {

    let index = 0;

    let text = input[index];
    let minNumber = Number.MAX_SAFE_INTEGER;

    while (text !== 'Stop') {
        let currentNumber = Number(text);
        if (currentNumber < minNumber) {
            minNumber = currentNumber;
        }
        index++;
        text = input[index];
    }

    console.log(minNumber);

}

minNumber(["100", "99", "80", "70", "Stop"]);