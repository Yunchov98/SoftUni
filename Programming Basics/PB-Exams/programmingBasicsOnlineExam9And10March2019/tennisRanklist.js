function tennisRanklist(input) {

    let index = 0;

    let tournamentsCount = Number(input[index]);
    index++;
    let startingPoints = Number(input[index]);
    index++;

    let tournamentPoint = 0;
    let avgPoints = 0;
    let winsCounter = 0;


    for (let i = 0; i < tournamentsCount; i++) {
        let type = input[index];
        index++;

        switch (type) {
            case 'W': tournamentPoint = 2000;
                winsCounter++;
                break;
            case 'F': tournamentPoint = 1200; break;
            case 'SF': tournamentPoint = 720; break;
        }

        startingPoints += tournamentPoint;
        avgPoints += tournamentPoint / tournamentsCount;
    }

    let winningPercent = winsCounter / tournamentsCount * 100;

    console.log(`Final points: ${startingPoints}`);
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