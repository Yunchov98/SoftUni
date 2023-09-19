function skeleton(input) {

    let mins = Number(input[0]);
    let secs = Number(input[1]);
    let length = Number(input[2]);
    let secsFor100M = Number(input[3]);

    let totalSec = mins * 60 + secs;
    let delay = length / 120;
    let totalDelay = delay * 2.5;
    let marinTime = (length / 100) * secsFor100M - totalDelay;

    if (marinTime <= totalSec) {
        console.log('Marin Bangiev won an Olympic quota!');
        console.log(`His time is ${marinTime.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${(marinTime - totalSec).toFixed(3)} second slower.`);
    }

}

skeleton(["1",
"20",
"1546",
"12"])
