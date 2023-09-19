function tennisRanklist(input) {

    let index = 0;

    let tournamentsCount = Number(input[index]);
    index++;

    let startingPoints = Number(input[index]);
    index++;

    let wins = 0;
    let currentPoints = 0;

    for (let i = 0; i <= tournamentsCount; i++) {
        let reachedStage = input[index];
        index++;
        switch (reachedStage) {
            case 'W':
                currentPoints += 2000;
                wins++;
                break;
            case 'F':
                currentPoints += 1200;
                break;
            case 'SF':
                currentPoints += 720;
                break;
        }
    }

    let finalPoints = currentPoints + startingPoints;
    let avgPoints = currentPoints / tournamentsCount;
    let winningPercent = wins / tournamentsCount * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${winningPercent.toFixed(2)}%`);
}

tennisRanklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])
    ;