function bonusScoringSystem(array) {

    const numberOfStudents = Number(array.shift()); // взимаме броят на студентите;
    const totalNumberOfLectures = Number(array.shift()); /// взимаме броят на лекциите;
    const bonus = Number(array.shift()); // взимаме бонуса;
    let maxBonus = 0; // променлива, която държи най - големият бонус;
    let lectures = 0; // променлива, която държи броят на лекциите;

    for (let i = 0; i < array.length; i++) { // цикъл, в който взимаме присъстивята;
        const studentAtendances = array[i];
        for (let k = 0; k < numberOfStudents; k++) { // вложен цикъл, при който изчисляваме бонусът
            const totalBonus = studentAtendances / totalNumberOfLectures * (5 + bonus);
            if (totalBonus > maxBonus) { // проверка при която, ако текущият бонус е по - голям от най - големият бонус:
                maxBonus = totalBonus; // присовяваме стойността на текущият бонус на променливата, която държи максималният ни бонус;
                lectures = studentAtendances; // присвояваме броят на лекциите на студента с най - голям бонус на променлива lectures;
            }
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`); // принтираме най - големият бонус закръглен към по - голямото цяло число;
    console.log(`The student has attended ${lectures} lectures.`); // принтираме броят на лекциите на студента с най - голям бонус;

}

    // written by Georgi Yunchov on 18.10.2022;

bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]
);