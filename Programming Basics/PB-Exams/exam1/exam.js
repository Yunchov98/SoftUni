function exam(input) {

    let index = 0;

    let studentsCount = Number(input[index]);
    index++;

    let grade5And6 = 0;
    let grade4 = 0;
    let grade3 = 0;
    let failedCounter = 0;
    let sum = 0;


    for(let i = 0; i < studentsCount; i++){
        let currentGrade = Number(input[index]);
        index++;

        if(currentGrade >= 5){
            grade5And6++;
        }else if(currentGrade >= 4.00 && currentGrade <= 4.99){
            grade4++;
        }else if(currentGrade >= 3.00 && currentGrade <= 3.99){
            grade3++;
        }else if(currentGrade < 3.00){
            failedCounter++;
        }
        sum += currentGrade;
    }

    let grade5And6InPercent = grade5And6 / studentsCount * 100;
    let grade4InPercent = grade4 / studentsCount * 100;
    let grade3InPercent = grade3 / studentsCount * 100;
    let failedCounterInPercent = failedCounter / studentsCount * 100;
    let avg = sum / studentsCount;

    console.log(`Top students: ${grade5And6InPercent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${grade4InPercent.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${grade3InPercent.toFixed(2)}%`);
    console.log(`Fail: ${failedCounterInPercent.toFixed(2)}%`);
    console.log(`Average: ${avg.toFixed(2)}`);

}

exam(['6', '2', '3', '4', '5', '6', '2.2']);