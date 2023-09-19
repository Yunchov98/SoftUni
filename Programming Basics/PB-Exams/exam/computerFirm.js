function computerFirm(input) {

    let index = 0;

    let computers = Number(input[index]);
    index++;

    let salesCounter = 0;
    let raitingCounter = 0;

    for (let i = 0; i < computers; i++) {
        let currentNumber = Number(input[index]);
        index++;

        let raiting = currentNumber % 10;
        let sales = Math.trunc(currentNumber / 10);

        if (raiting === 2) {
            sales *= 0;
        } else if (raiting === 3) {
            sales *= 0.50;
        } else if (raiting === 4) {
            sales *= 0.70;
        } else if (raiting === 5) {
            sales *= 0.85;
        } else if (raiting === 6) {
            sales *= 1;
        }
        
        raitingCounter += raiting;
        salesCounter += sales;
    }

    let avg = raitingCounter / computers;

    console.log(salesCounter.toFixed(2));
    console.log(avg.toFixed(2));
}

computerFirm(["5",
    "122",
    "156",
    "202",
    "214",
    "185"])
    ;