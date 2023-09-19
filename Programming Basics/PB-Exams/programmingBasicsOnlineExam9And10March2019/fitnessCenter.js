function fitnessCenter(input) {

    let index = 0;

    let peopleCount = Number(input[index]);
    index++;

    let trainBack = 0;
    let trainChest = 0;
    let trainLegs = 0;
    let trainAbs = 0;
    let drinkShake = 0;
    let eatBar = 0;

    for (let i = 0; i < peopleCount; i++) {
        let activity = input[index];
        index++;

        switch (activity) {
            case 'Back': trainBack++; break;
            case 'Chest': trainChest++; break;
            case 'Legs': trainLegs++; break;
            case 'Abs': trainAbs++; break;
            case 'Protein shake': drinkShake++; break;
            case 'Protein bar': eatBar++; break;
        }
    }

    let peopleWhoTrainedInPercent = ((trainBack + trainChest + trainLegs + trainAbs) / peopleCount) * 100;
    let peopleWhoEatAndDrinkInPercent = ((drinkShake + eatBar) / peopleCount) * 100;

    console.log(`${trainBack} - back`);
    console.log(`${trainChest} - chest`);
    console.log(`${trainLegs} - legs`);
    console.log(`${trainAbs} - abs`);
    console.log(`${drinkShake} - protein shake`);
    console.log(`${eatBar} - protein bar`);
    console.log(`${peopleWhoTrainedInPercent.toFixed(2)}% - work out`);
    console.log(`${peopleWhoEatAndDrinkInPercent.toFixed(2)}% - protein`);

}

fitnessCenter(["10",
    "Back",
    "Chest",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar",
    "Protein shake",
    "Protein bar",
    "Legs",
    "Abs"])
    ;