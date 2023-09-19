function vegetableMarket(input) {

    let priceForOneKiloVegetables = Number(input[0]);
    let priceForOneKiloFruits = Number(input[1]);
    let totalVegetablesKilo = Number(input[2]);
    let totalFruitsKilo = Number(input[3]);

    let vegetablesCost = priceForOneKiloVegetables * totalVegetablesKilo;
    let fruitsCost = priceForOneKiloFruits * totalFruitsKilo;

    let total = vegetablesCost + fruitsCost;
    let totalInEuro = total / 1.94;

    console.log(totalInEuro.toFixed(2));
}

vegetableMarket(['0.194', '19.4', '10', '10']);