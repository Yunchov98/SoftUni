function graduation(input) {

    let index = 0;

    let name = input[index];
    index++;

    let currentClass = 1;
    let sum = 0;
    let badGradesCounter = 0;

    while (currentClass <= 12) {
        let currentGrade = Number(input[index]);
        index++;
        if (currentGrade >= 4.00) {
            sum += currentGrade;
            currentClass++;
        }
        if (currentGrade < 4.00) {
            badGradesCounter++;
        }
        if (badGradesCounter > 1) {
            console.log(`${name} has been excluded at ${currentClass} grade`);
            break;
        }
    }

    let avgGrade = sum / 12;
    if (badGradesCounter <= 1) {
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }

}

graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
