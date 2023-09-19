function easterParty(input) {

    let guestsCount = Number(input[0]);
    let coverChargePriceForOneMen = Number(input[1]);
    let budget = Number(input[2]);

    if (guestsCount >= 10 && guestsCount <= 15) {
        coverChargePriceForOneMen = coverChargePriceForOneMen - (coverChargePriceForOneMen * 0.15);
    } else if (guestsCount > 15 && guestsCount <= 20) {
        coverChargePriceForOneMen = coverChargePriceForOneMen - (coverChargePriceForOneMen * 0.20);
    } else if (guestsCount > 20) {
        coverChargePriceForOneMen = coverChargePriceForOneMen - (coverChargePriceForOneMen * 0.25);
    }

    let cackePrice = budget * 0.10;

    let totalPrice = (guestsCount * coverChargePriceForOneMen) + cackePrice;

    let diff = Math.abs(budget - totalPrice);
    if (budget >= totalPrice) {
        console.log(`It is party time! ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${diff.toFixed(2)} leva needed.`)
    }

}

easterParty(['24', '35', '550']);