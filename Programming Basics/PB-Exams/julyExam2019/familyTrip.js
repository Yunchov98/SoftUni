function familyTrip(input) {

    let budget = Number(input[0]);
    let nightsCount = Number(input[1]);
    let priceForOneNight = Number(input[2]);
    let percentForAdditionalCosts = Number(input[3]);

    if (nightsCount > 7) {
        priceForOneNight = priceForOneNight - (priceForOneNight * 5 / 100);
    }

    let totalPriceForNights = nightsCount * priceForOneNight;
    let additionalCosts = budget * percentForAdditionalCosts / 100;
    let total = totalPriceForNights + additionalCosts;

    if (budget >= total) {
        console.log(`Ivanovi will be left with ${(budget - total).toFixed(2)} leva after vacation.`)
    } else {
        console.log(`${(total - budget).toFixed(2)} leva needed.`)
    }

}

familyTrip(['800.50', '8', '100', '2']);