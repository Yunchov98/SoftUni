function schoolGrades(input) {
    const map = new Map();

    for (const line of input) {
        let tokens = line.split(' ');
        const name = tokens.shift();
        const setOfGrades = tokens;

        if (!map.has(name)) {
            map.set(name, setOfGrades);
        } else {
            let oldSet = map.get(name);
            for (let grade of setOfGrades) {
                oldSet.push(grade);
            }

            map.set(name, oldSet);
        }
    }

    const sortedMap = Array.from(map.entries()).sort(([nameA, gradeA], [nameB, gradeB]) => nameA.localeCompare(nameB));

    for (const [names, grades] of sortedMap) {
        let sumOfGrades = 0;
        for (currentGrade of grades) {
            sumOfGrades += Number(currentGrade);
        }

        let avgGrade = sumOfGrades / grades.length;
        console.log(`${names}: ${avgGrade.toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);