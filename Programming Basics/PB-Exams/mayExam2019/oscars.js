function oscars(input) {

    let index = 0;

    let actorName = input[index];
    index++;
    let startingPoints = Number(input[index]);
    index++;
    let judges = Number(input[index]);
    index++;

    let totalPoints = 0;

    for (let i = 0; i < judges; i++) {
        let judgeName = input[index];
        index++;
        let points = Number(input[index]);
        index++;

        startingPoints += (judgeName.length * points) / 2;
        totalPoints = startingPoints;
        if (startingPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${startingPoints.toFixed(1)}!`);
            break;
        }

    }

    if (totalPoints < 1250.5) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - totalPoints).toFixed(1)} more!`);
    }

}

oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])
