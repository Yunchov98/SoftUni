function flowerShop(input) {

    let magnoliasCount = Number(input[0]);
    let hyacinthsCount = Number(input[1]);
    let rosesCount = Number(input[2]);
    let cactusCount = Number(input[3]);
    let giftPrice = Number(input[4]);

    let totalPrice = magnoliasCount * 3.25 + hyacinthsCount * 4.00 + rosesCount * 3.50 + cactusCount * 8;
    let totalPriceAfterTax = totalPrice - (totalPrice * 5 / 100);

    let moneyLeft = Math.abs(totalPriceAfterTax - giftPrice);

    if (totalPriceAfterTax >= giftPrice) {
        console.log(`She is left with ${Math.floor(moneyLeft)} leva.`)
    } else {
        console.log(`She will have to borrow ${Math.ceil(moneyLeft)} leva.`)
    }

}

flowerShop(['15', '7', '5', '10', '100']);