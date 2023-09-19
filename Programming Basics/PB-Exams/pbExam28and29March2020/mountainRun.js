function mountainRun(input) {

    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timeForClimbingOneMeter = Number(input[2]);

    let time = distance * timeForClimbingOneMeter;
    let timeWithDelay = Math.floor(distance / 50) * 30;
    let totalTime = time + timeWithDelay;
    if (totalTime < record) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(totalTime - record).toFixed(2)} seconds slower.`);
    }

}

mountainRun(['5554.36', '1340', '3.23']);