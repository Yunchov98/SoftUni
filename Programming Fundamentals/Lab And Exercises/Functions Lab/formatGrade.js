function formatGrade(grade) {

    let gradeWord = '';

    if (grade < 3) {
        gradeWord = 'Fail';
    } else if (grade < 3.50) {
        gradeWord = 'Poor';
    } else if (grade < 4.50) {
        gradeWord = 'Good';
    } else if (grade < 5.50) {
        gradeWord = 'Very good';
    } else {
        gradeWord = 'Excellent';
    }

    if (gradeWord === 'Fail') {
        console.log(`${gradeWord} (2)`);
    } else {
        console.log(`${gradeWord} (${grade.toFixed(2)})`);
    }
}

formatGrade(5.5);