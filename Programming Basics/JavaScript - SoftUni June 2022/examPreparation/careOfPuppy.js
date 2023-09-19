function careOfPuppy(input) {

    let index = 0;

    let totalFood = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let totalFoodInGrams = totalFood * 1000;
    let totalEatenFood = 0;

    while (command !== 'Adopted') {
        let eatenFood = Number(command);
        totalEatenFood += eatenFood;
        command = input[index];
        index++;
    }

    if (totalEatenFood <= totalFoodInGrams) {
        console.log(`Food is enough! Leftovers: ${totalFoodInGrams - totalEatenFood} grams.`);
    } else {
        console.log(`Food is not enough. You need ${totalEatenFood - totalFoodInGrams} grams more.`);
    }

}

careOfPuppy(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"])
    ;