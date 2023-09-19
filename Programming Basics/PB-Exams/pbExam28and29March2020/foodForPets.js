function foodForPets(input) {

    let index = 0;

    let daysCount = Number(input[index]);
    index++;

    let totalQuantityFood = Number(input[index]);
    index++;

    let dogFood = 0;
    let catFood = 0;
    let biscuits = 0;

    for (let i = 1; i <= daysCount; i++) {
        let dogFoodEaten = Number(input[index]);
        index++;
        let catFoodEaten = Number(input[index]);
        index++;
        dogFood += dogFoodEaten;
        catFood += catFoodEaten;
        if (i % 3 === 0) {
            let currentBiscuits = (dogFoodEaten + catFoodEaten) * 0.1;
            biscuits += currentBiscuits;
        }
    }

    let totalEatenFood = catFood + dogFood;
    let totalEatenFoodInPercent = totalEatenFood / totalQuantityFood * 100;
    let dogEatenFoodInPercent = dogFood / totalEatenFood * 100;
    let catEatenFoodInPercent = catFood / totalEatenFood * 100;

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${totalEatenFoodInPercent.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogEatenFoodInPercent.toFixed(2)}% eaten from the dog.`);
    console.log(`${catEatenFoodInPercent.toFixed(2)}% eaten from the cat.`);
}

foodForPets(["3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40"])
    ;