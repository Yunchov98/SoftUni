function catWalking(input) {

    let minForWalk = Number(input[0]);
    let walksInDay = Number(input[1]);
    let caloriesTaken = Number(input[2]);

    let totalMinutesForWalk = minForWalk * walksInDay;
    let totalBurnedCalories = totalMinutesForWalk * 5;
    let neededCalories = caloriesTaken * 0.50;

    if (totalBurnedCalories >= neededCalories) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalBurnedCalories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalBurnedCalories}.`);
    }

}

catWalking(['30', '3', '600']);