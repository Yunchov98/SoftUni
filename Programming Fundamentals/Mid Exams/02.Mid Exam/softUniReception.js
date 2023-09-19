function softUniReception(array) {

    let firstEmployerStudentsPerHour = Number(array[0]);
    let secondEmployerStudentsPerHour = Number(array[1]);
    let thirdEmployerStudentsPerHour = Number(array[2]);
    let studentsCount = Number(array[3]);

    let hours = 0;

    let totalStudentsPerHour = firstEmployerStudentsPerHour + secondEmployerStudentsPerHour + thirdEmployerStudentsPerHour;

    while (studentsCount > 0) {
        studentsCount -= totalStudentsPerHour;
        hours++;
        
        if (hours % 4 === 0) {
            hours++;
        }
    }

    console.log(`Time needed: ${hours}h.`);

}

softUniReception(['3', '2', '5', '40']);