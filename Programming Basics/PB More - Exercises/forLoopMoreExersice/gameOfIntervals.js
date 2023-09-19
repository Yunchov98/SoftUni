function gameOfIntervals(input) {

    let index = 0;

    let turns = Number(input[index]);
    index++;

    let points = 0;
    let numbersFrom0To9Counter = 0;
    let numbersFrom10To19Counter = 0;
    let numbersFrom20To29Counter = 0;
    let numbersFrom30To39Counter = 0;
    let numbersFrom40To50Counter = 0;
    let invalidNumbersCounter = 0;

    for (let number = 1; number <= turns; number++) {
        let currentNumber = Number(input[number]);
        if (currentNumber >= 0 && currentNumber <= 9) {
            points += currentNumber * 0.2;
            numbersFrom0To9Counter++;
        } else if (currentNumber >= 10 && currentNumber <= 19) {
            points += currentNumber * 0.3;
            numbersFrom10To19Counter++;
        } else if (currentNumber >= 20 && currentNumber <= 29) {
            points += currentNumber * 0.4;
            numbersFrom20To29Counter++;
        } else if (currentNumber >= 30 && currentNumber <= 39) {
            points += 50;
            numbersFrom30To39Counter++;
        } else if (currentNumber >= 40 && currentNumber <= 50) {
            points += 100;
            numbersFrom40To50Counter++;
        } else {
            points /= 2;
            invalidNumbersCounter++;
        }
    }

    let numbersFrom0To9InPercent = numbersFrom0To9Counter / turns * 100;
    let numbersFrom10To19InPercent = numbersFrom10To19Counter / turns * 100;
    let numbersFrom20To29InPercent = numbersFrom20To29Counter / turns * 100;
    let numbersFrom30To39InPercent = numbersFrom30To39Counter / turns * 100;
    let numbersFrom40To50InPercent = numbersFrom40To50Counter / turns * 100;
    let invalidNumbersInPercent = invalidNumbersCounter / turns * 100;

    console.log(points.toFixed(2));
    console.log(`From 0 to 9: ${numbersFrom0To9InPercent.toFixed(2)}%`);
    console.log(`From 10 to 19: ${numbersFrom10To19InPercent.toFixed(2)}%`);
    console.log(`From 20 to 29: ${numbersFrom20To29InPercent.toFixed(2)}%`);
    console.log(`From 30 to 39: ${numbersFrom30To39InPercent.toFixed(2)}%`);
    console.log(`From 40 to 50: ${numbersFrom40To50InPercent.toFixed(2)}%`);
    console.log(`Invalid numbers: ${invalidNumbersInPercent.toFixed(2)}%`);

}

gameOfIntervals(['10', '43', '57', '-12', '23', '12', '0', '50', '40', '30', '20']);