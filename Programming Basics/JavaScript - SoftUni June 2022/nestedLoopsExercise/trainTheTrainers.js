function trainTheTrainers(input) {

    let index = 0;

    let peopleCount = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let counter = 0;
    let sumOfGrade = 0;

    while (command !== 'Finish') {
        let name = command;
        counter++;
        let tempSumOfGrade = 0;
        for (let i = 0; i < peopleCount; i++) {
            let currentGrade = Number(input[index]);
            index++;
            tempSumOfGrade += currentGrade;
        }
        let tempAvgGrade = tempSumOfGrade / peopleCount;
        sumOfGrade += tempAvgGrade;
        console.log(`${name} - ${tempAvgGrade.toFixed(2)}.`);
        command = input[index];
        index++;
    }
    let avgGrade = sumOfGrade / counter;
    
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);

}

trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"])
    ;