function schoolGrades(input) {
    const result = {};

    input.forEach(line => {
        let tokens = line.split(' ');
        const name = tokens.shift();
        let setOfGrades = tokens;

        if (!result.hasOwnProperty(name)) {
            result[name] = setOfGrades;
        } else {
            let oldSet = result[name];

            for (const grade of setOfGrades) {
                oldSet.push(grade);
            }

            result[name] = oldSet;
        }
    });

    let entries = Object.entries(result);
    entries = entries.sort(([nameA, gradeA], [nameB, gradeB]) => nameA.localeCompare(nameB));

    for (const [name, grades] of entries) {
        let sumOfGrades = 0;
        for (const currentGrade of grades) {
            sumOfGrades += Number(currentGrade);
        }

        const avgGrade = sumOfGrades / grades.length;
        console.log(`${name}: ${avgGrade.toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);