function easterBakery(input) {

    let flourPriceForOneKilo = Number(input[0]);
    let flourKilos = Number(input[1]);
    let sugarKilos = Number(input[2]);
    let eggsBoxCount = Number(input[3]);
    let yeastPacks = Number(input[4]);

    let sugarPrice = flourPriceForOneKilo - (flourPriceForOneKilo * 0.25);
    let oneBoxEggsPrice = flourPriceForOneKilo + (flourPriceForOneKilo * 0.10);
    let onePackYeastPrice = sugarPrice - (sugarPrice * 0.80);

    let totalFlourPrice = flourPriceForOneKilo * flourKilos;
    let totalSugarPrice = sugarKilos * sugarPrice;
    let totalEggsPrice = eggsBoxCount * oneBoxEggsPrice;
    let totalYeastPrice = yeastPacks * onePackYeastPrice;

    let total = totalFlourPrice + totalSugarPrice + totalEggsPrice + totalYeastPrice;

    console.log(total.toFixed(2));

}

easterBakery(['50', '10', '3.5', '6', '1']);