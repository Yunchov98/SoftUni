function easterCompetition(input) {

    let index = 0;

    let easterBreadCount = Number(input[index]);
    index++;

    let totalPoints = 0;
    let maxPoints = 0;
    let bestBaker = '';

    for (let i = 0; i < easterBreadCount; i++) {
        let bakerName = input[index];
        index++;
        let command = input[index];
        index++;
        while (command !== 'Stop') {
            let points = Number(command);
            totalPoints += points;
            command = input[index];
            index++;
        }
        if (command === 'Stop') {
            console.log(`${bakerName} has ${totalPoints} points.`);
            if (totalPoints > maxPoints) {
                maxPoints = totalPoints;
                bestBaker = bakerName;
                console.log(`${bakerName} is the new number 1!`);
            }
        }
        totalPoints = 0;
    }
    console.log(`${bestBaker} won competition with ${maxPoints} points!`);
}

easterCompetition(["3",
    "Chef Manchev",
    "10",
    "10",
    "10",
    "10",
    "Stop",
    "Natalie",
    "8",
    "2",
    "9",
    "Stop",
    "George",
    "9",
    "2",
    "4",
    "2",
    "Stop"])
    ;