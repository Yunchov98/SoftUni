function sleepyTomCat(input) {

    let countOfTheRestDays = Number(input[0]);

    let minutesInRestDays = countOfTheRestDays * 127;
    let workDays = 365 - countOfTheRestDays;
    let minutesInWorkDays = workDays * 63;

    let totalMinutes = minutesInRestDays + minutesInWorkDays;
    let diffInMinutes = 30000 - totalMinutes;
    let totalHours = Math.floor(Math.abs(diffInMinutes / 60));
    let minutes = Math.abs(diffInMinutes % 60);

    if (30000 > totalMinutes) {
        console.log(`Tom sleeps well`);
        console.log(`${totalHours} hours and ${minutes} minutes less for play`)
    } else {
        console.log(`Tom will run away`);
        console.log(`${totalHours} hours and ${minutes} minutes more for play`)
    }

}

sleepyTomCat(['20']);

