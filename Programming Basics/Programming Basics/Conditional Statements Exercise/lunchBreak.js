function lunchBreak(input) {

    let movieName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let timeForLunch = breakDuration / 8;
    let timeForRest = breakDuration / 4;

    let timeLeft = breakDuration - (timeForLunch + timeForRest);

    if (timeLeft >= episodeDuration) {
        let timeLeftAfterMovie = timeLeft - episodeDuration;
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(timeLeftAfterMovie)} minutes free time.`)
    } else {
        let timeNeeded = episodeDuration - timeLeft;
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(timeNeeded)} more minutes.`)
    }

}

lunchBreak(["Teen Wolf", "48", "60"]);
