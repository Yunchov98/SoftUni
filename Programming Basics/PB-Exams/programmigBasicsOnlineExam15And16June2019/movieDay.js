function movieDay(input) {

    let timeForPictures = Number(input[0]);
    let scenesCount = Number(input[1]);
    let sceneDuration = Number(input[2]);

    let timeForPreparation = timeForPictures * 0.15;
    let timeForScenes = scenesCount * sceneDuration;
    let timeNeeded = timeForPreparation + timeForScenes;

    let diff = Math.abs(timeForPictures - timeNeeded);

    if (timeForPictures < timeNeeded) {
        console.log(`Time is up! To complete the movie you need ${Math.round(diff)} minutes.`);
    } else {
        console.log(`You managed to finish the movie on time! You have ${Math.round(diff)} minutes left!`)
    }

}

movieDay(["120",
    "10",
    "11"])
    ;