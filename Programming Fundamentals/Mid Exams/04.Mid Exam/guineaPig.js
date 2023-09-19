function guineaPig(array) {

    let foodQuantityInGrams = Number(array.shift()) * 1000;;
    let hayQuantityInGrams = Number(array.shift()) * 1000;
    let coverQuantityInGrams = Number(array.shift()) * 1000;
    let pigsWeightInGrams = Number(array.shift()) * 1000;



    for (let i = 1; i <= 30; i++) {

        foodQuantityInGrams -= 300;

        if (i % 2 === 0) {
            hayQuantityInGrams -= foodQuantityInGrams * 0.05;
        }

        if (i % 3 === 0) {
            coverQuantityInGrams -= pigsWeightInGrams / 3;
        }

        if (foodQuantityInGrams <= 0 || hayQuantityInGrams <= 0 || coverQuantityInGrams <= 0) {
            console.log('Merry must go to the pet store!');
            return;
        }
    }

    console.log(`Everything is fine! Puppy is happy! Food: ${(foodQuantityInGrams / 1000).toFixed(2)}, Hay: ${(hayQuantityInGrams / 1000).toFixed(2)}, Cover: ${(coverQuantityInGrams / 1000).toFixed(2)}.`)

}

guineaPig((["10",
    "5",
    "5.2",
    "1"])

);