function poolDay(input) {

    let peopleCount = Number(input[0]);
    let entryTax = Number(input[1]);
    let priceForOneDeckChair = Number(input[2]);
    let priceForOneUmbrella = Number(input[3]);

    let totalEntryTax = peopleCount * entryTax;
    let peopleWithDeckChair = Math.ceil(peopleCount * 0.75);
    let peopleWithUmbrella = Math.ceil(peopleCount / 2);
    let totalPriceForUmrellas = peopleWithUmbrella * priceForOneUmbrella;
    let totalPriceForDeckChairs = peopleWithDeckChair * priceForOneDeckChair;

    let total = totalEntryTax + totalPriceForUmrellas + totalPriceForDeckChairs;

    console.log(`${total.toFixed(2)} lv.`);
}

poolDay(['50', '6', '8', '4']);