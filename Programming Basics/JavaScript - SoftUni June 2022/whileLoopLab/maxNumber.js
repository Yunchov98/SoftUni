function maxNumber(input) {

    let index = 0;

    let text = input[index];
    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (text !== 'Stop') {
        let textAsNumber = Number(text);
        if (textAsNumber > maxNumber) {
            maxNumber = textAsNumber;
        }
        index++;
        text = input[index];
    }

    console.log(maxNumber);

}

maxNumber(["100", "99", "80", "70", "Stop"]);