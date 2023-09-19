function theHuntingGames(array) {

    let daysOfTheAdventure = Number(array[0]);
    let numberOfPlayers = Number(array[1]);
    let groupEnergy = Number(array[2]);
    let waterPerDayForOnePerson = Number(array[3]);
    let foodPerDayForOnePerson = Number(array[4]);

    let totalFood = foodPerDayForOnePerson * numberOfPlayers * daysOfTheAdventure;
    let totalWater = waterPerDayForOnePerson * numberOfPlayers * daysOfTheAdventure;
    let daysCounter = 0;

    for (let i = 5; i < array.length; i++) {
        let lostEnergy = Number(array[i]);

        if (groupEnergy <= lostEnergy) {
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            return;
        }
        daysCounter++;
        groupEnergy -= lostEnergy;

        if (daysCounter % 2 === 0) {
            groupEnergy += groupEnergy * 0.05;
            totalWater *= 0.70;
        }

        if (daysCounter % 3 === 0) {
            if(totalFood >= totalFood / numberOfPlayers){
            totalFood -= totalFood / numberOfPlayers;
            groupEnergy += groupEnergy * 0.10;
            }
        }
    }
    console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
}

theHuntingGames((["12",
    "6",
    "4430",
    "9.8",
    "5.5",
    "620.3",
    "840.2",
    "960.1",
    "220",
    "340",
    "674",
    "365",
    "345.5",
    "212",
    "412.12",
    "258",
    "496"])

);