function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let statistsCount = Number(input[1]);
    let outfitPriceForOneStatist = Number(input[2]);

    let decorPrice = budget * 0.1;
    let outfitPrice = statistsCount * outfitPriceForOneStatist;

    if (statistsCount > 150) {
        outfitPrice = outfitPrice - (outfitPrice * 10 / 100);
    }

    let totalPriceForTheMovie = decorPrice + outfitPrice;

    if (totalPriceForTheMovie > budget) {
        console.log('Not enough money!');
        console.log(`Wingard needs ${(totalPriceForTheMovie - budget).toFixed(2)} leva more.`);
    } else {
        console.log('Action!');
        console.log(`Wingard starts filming with ${(budget - totalPriceForTheMovie).toFixed(2)} leva left.`);
    }

}

godzillaVsKong(['9587.88', '222', '55.68']);