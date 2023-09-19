function grades(input) {

    let index = 0;

    let studentsCount = Number(input[index]);
    index++;

    let grade5Counter = 0;
    let grade4Counter = 0;
    let grade3Counter = 0;
    let failCounter = 0;
    let totalValuation = 0;

    for (let grade = 1; grade <= studentsCount; grade++) {
        let currentGrade = Number(input[grade]);
        if (currentGrade >= 5) {
            grade5Counter++;
        } else if (currentGrade >= 4 && currentGrade <= 4.99) {
            grade4Counter++;
        } else if (currentGrade >= 3 && currentGrade <= 3.99) {
            grade3Counter++;
        } else {
            failCounter++;
        }
        totalValuation += currentGrade;
    }

    let topStudentsInPercent = grade5Counter / studentsCount * 100;
    let studentsWithGrade4InPercent = grade4Counter / studentsCount * 100;
    let studentsWithGrade3InPercent = grade3Counter / studentsCount * 100;
    let failedStudentsInPercent = failCounter / studentsCount * 100;
    let avg = totalValuation / studentsCount;

    console.log(`Top students: ${topStudentsInPercent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${studentsWithGrade4InPercent.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${studentsWithGrade3InPercent.toFixed(2)}%`);
    console.log(`Fail: ${failedStudentsInPercent.toFixed(2)}%`);
    console.log(`Average: ${avg.toFixed(2)}`);

}

grades(['10', '3.00', '2.99', '5.68', '3.01', '4', '4', '6.00', '4.50', '2.44', '5']);