function onTimeForTheExam(input) {

    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivedHour = Number(input[2]);
    let arrivedMinutes = Number(input[3]);

    let totalExamMinutes = examHour * 60 + examMinutes;
    let totalArrivedMinutes = arrivedHour * 60 + arrivedMinutes;

    let diff = Math.abs(totalExamMinutes - totalArrivedMinutes);
    let hours = Math.floor(diff / 60);
    let minutes = diff % 60;

    if (totalExamMinutes < totalArrivedMinutes) {
        console.log('Late');
        if (diff < 60) {
            console.log(`${minutes} minutes after the start`);
        } else {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours after the start`);
            } else {
                console.log(`${hours}:${minutes} hours after the start`);
            }
        }
    } else if (totalExamMinutes === totalArrivedMinutes || totalExamMinutes - totalArrivedMinutes <= 30) {
        console.log('On time');
        if (diff > 0) {
            console.log(`${minutes} minutes before the start`);
        }
    } else {
        console.log('Early');
        if (diff < 60) {
            console.log(`${minutes} minutes before the start`);
        } else {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours before the start`);
            } else {
                console.log(`${hours}:${minutes} hours before the start`);
            }
        }
    }

}

onTimeForTheExam(["9", "00", "10", "30"]);