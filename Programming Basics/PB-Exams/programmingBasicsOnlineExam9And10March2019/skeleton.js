function skeleton(input) {

    let min = Number(input[0]);
    let sec = Number(input[1]);
    let length = Number(input[2]);
    let secNeededFor100Meters = Number(input[3]);

    let minInSec = min * 60 + sec;
    let slowTime = length / 120;
    let totalSlowTime = slowTime * 2.5;
    let marinTime = (length / 100) * secNeededFor100Meters - totalSlowTime;

    let diff = Math.abs(minInSec - marinTime);

    if (minInSec < marinTime) {
        console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`);
    } else {
        console.log('Marin Bangiev won an Olympic quota!');
        console.log(`His time is ${marinTime.toFixed(3)}.`);
    }

}

skeleton(['1', '20', '1546', '12']);