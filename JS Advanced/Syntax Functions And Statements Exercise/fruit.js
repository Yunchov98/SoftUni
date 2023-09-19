function fruit(currentFruit, weightInGrams, pricePerKilogram) {
    const weightInKilograms = weightInGrams / 1000;
    const totalPrice = weightInKilograms * pricePerKilogram;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${currentFruit}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);