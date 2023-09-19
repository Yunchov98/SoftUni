function suppliesForSchool(input) {

    let pencilCount = Number(input[0]);
    let markerCount = Number(input[1]);
    let detergentLitters = Number(input[2]);
    let percent = Number(input[3]);

    let pencilPrice = pencilCount * 5.80;
    let markerPrice = markerCount * 7.20;
    let detergentPrice = detergentLitters * 1.20;

    let totalPrice = pencilPrice + markerPrice + detergentPrice;
    let priceAfterDiscount = totalPrice - (totalPrice * (percent / 100));

    console.log(priceAfterDiscount);

}

suppliesForSchool(['4', '2', '5', '13']);