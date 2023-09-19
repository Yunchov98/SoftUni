function fruitMarket(arg1, arg2, arg3, arg4, arg5){

    let strawberriesPrice = Number(arg1);
    let bananasQuantity = Number(arg2);
    let orangesQuantity = Number(arg3);
    let raspberriesQuantity = Number(arg4);
    let strawberriesQuantity = Number(arg5);
    
    let raspberriesPrice = strawberriesPrice / 2;
    let orangesPrice = raspberriesPrice - (raspberriesPrice * 0.4);
    let bananasPrice = raspberriesPrice - ( raspberriesPrice * 0.8);

    let totalStrawberriesPrice = strawberriesPrice * strawberriesQuantity;
    let totalBananasPrice = bananasPrice * bananasQuantity;
    let totalOrangesPrice = orangesPrice * orangesQuantity;
    let totalRaspberriesPrice = raspberriesPrice * raspberriesQuantity;

    let total = totalStrawberriesPrice + totalBananasPrice + totalOrangesPrice + totalRaspberriesPrice;

    console.log(total.toFixed(2));
}

fruitMarket(48, 10, 3.3, 6.5, 1.7)