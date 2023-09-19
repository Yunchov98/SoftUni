function fruitMarket(input) {

    let strawberriesPrice = Number(input[0]);
    let bananasQuantity = Number(input[1]);
    let orangesQuantity = Number(input[2]);
    let raspberriesQuantity = Number(input[3]);
    let strawberriesQuantity = Number(input[4]);

    let raspberriesPrice = strawberriesPrice / 2;
    let orangesPrice = raspberriesPrice - (raspberriesPrice * 0.4);
    let bananasPrice = raspberriesPrice - (raspberriesPrice * 0.8);

    let totalStrawberriesPrice = strawberriesPrice * strawberriesQuantity;
    let totalBananasPrice = bananasPrice * bananasQuantity;
    let totalOrangesPrice = orangesPrice * orangesQuantity;
    let totalRaspberriesPrice = raspberriesPrice * raspberriesQuantity;

    let total = totalStrawberriesPrice + totalBananasPrice + totalOrangesPrice + totalRaspberriesPrice;

    console.log(total.toFixed(2));
}

fruitMarket(['48', '10', '3.3', '6.5', '1.7']);