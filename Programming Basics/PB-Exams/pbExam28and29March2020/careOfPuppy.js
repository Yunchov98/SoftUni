function careOfPuppy(input) {

    let index = 0;

    let totalFood = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let totalFoodInGrams = totalFood * 1000;
    let eatenFood = 0;

    while (command !== 'Adopted') {
        let grams = Number(command);
        eatenFood += grams;
        command = input[index];
        index++;
    }

    let diff = Math.abs(totalFoodInGrams - eatenFood);
    if (totalFoodInGrams >= eatenFood) {
        console.log(`Food is enough! Leftovers: ${diff} grams.`);
    } else {
        console.log(`Food is not enough. You need ${(diff)} grams more.`);
    }

}

careOfPuppy(['4', '130', '345', '400', '180', '230', '120', 'Adopted']);