function tournamentOfChristmas(input) {

    let index = 0;

    let daysCount = Number(input[index]);
    index++;
    let command = input[index];
    index++;


    let totalSum = 0;
    let winGames = 0;
    let lostGames = 0;

    for (let i = 1; i <= daysCount; i++) {
        let sum = 0;
        let wins = 0;
        let lose = 0;
        while (command !== 'Finish') {
            let sport = command;
            let result = input[index];
            index++;

            if (result === 'win') {
                sum += 20;
                wins++;
            } else {
                lose++;
            }
            command = input[index];
            index++;
        }
        if (wins === lose) {
            break;
        }
        if (wins > lose) {
            sum += sum * 0.10;
        }
        totalSum += sum;
        winGames += wins;
        lostGames += lose;
        command = input[index];
        index++;
    }

    if (winGames > lostGames) {
        totalSum += totalSum * 0.20;
        console.log(`You won the tournament! Total raised money: ${totalSum.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalSum.toFixed(2)}`);
    }

}

tournamentOfChristmas(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"])
    ;