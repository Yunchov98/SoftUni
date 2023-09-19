function examPreparation(input) {

    let index = 0;

    let badGrades = Number(input[index]);
    index++;
    let exerciseName = input[index];
    index++;

    let badGradeCounter = 0;
    let sum = 0;
    let problemsCounter = 0;
    let taskName = '';

    while (exerciseName !== 'Enough') {
        taskName = exerciseName;
        let currentGrade = Number(input[index]);
        index++;
        problemsCounter++;
        sum += currentGrade;
        if (currentGrade <= 4.00) {
            badGradeCounter++;
            if (badGradeCounter >= badGrades) {
                break;
            }
        }
        exerciseName = input[index];
        index++;
    }

    let avg = sum / problemsCounter;

    if (exerciseName === 'Enough') {
        console.log(`Average score: ${avg.toFixed(2)}`);
        console.log(`Number of problems: ${problemsCounter}`);
        console.log(`Last problem: ${taskName}`);
    } else {
        console.log(`You need a break, ${badGradeCounter} poor grades.`);
    }

}

examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);