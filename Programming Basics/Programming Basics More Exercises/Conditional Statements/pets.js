function pets(input) {

    let days = Number(input[0]);
    let leftFoodInKilo = Number(input[1]);
    let dogFoodInKilo = Number(input[2]);
    let catFoodInKilo = Number(input[3]);
    let turtleFoodInGrams = Number(input[4]);

    let turtleFoodInKilo = turtleFoodInGrams / 1000;

    let neededFoodForDog = days * dogFoodInKilo;
    let neededFoodForCat = days * catFoodInKilo;
    let neededFoodForTurtle = days * turtleFoodInKilo;

    let totalFoodInKilo = neededFoodForDog + neededFoodForCat + neededFoodForTurtle;
    let diff = Math.abs(totalFoodInKilo - leftFoodInKilo)
    if (totalFoodInKilo <= leftFoodInKilo) {
        console.log(`${Math.floor(diff)} kilos of food left.`)
    } else {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`)
    }

}

pets(['5', '10', '2.1', '0.8', '321']);