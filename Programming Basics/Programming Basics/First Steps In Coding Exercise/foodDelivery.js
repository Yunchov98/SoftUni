function foodDelivery(input) {

    let chickenMenusCount = Number(input[0]);
    let fishMenusCount = Number(input[1]);
    let vegeterianMenusCount = Number(input[2]);

    let chickenMenusPrice = chickenMenusCount * 10.35;
    let fishMenusPrice = fishMenusCount * 12.40;
    let vegeterianMenusPrice = vegeterianMenusCount * 8.15;

    let totalMenusPrice = chickenMenusPrice + fishMenusPrice + vegeterianMenusPrice;
    let dessertPrice = totalMenusPrice * 20 / 100;

    let totalPrice = totalMenusPrice + dessertPrice + 2.50;
    console.log(totalPrice);

}

foodDelivery(['2', '4', '3']);