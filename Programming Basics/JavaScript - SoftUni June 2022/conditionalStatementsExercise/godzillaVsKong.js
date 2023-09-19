function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let statistsCount = Number(input[1]);
    let priceForOutfitForOneStatist = Number(input[2]);

    let decor = budget * 0.10;
    let totalOutfitPrice = statistsCount * priceForOutfitForOneStatist;

    if (statistsCount > 150) {
        totalOutfitPrice = totalOutfitPrice * 0.90;
    }

    let moneyNeeded = decor + totalOutfitPrice;
    let diff = Math.abs(moneyNeeded - budget);
    if (moneyNeeded > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${diff.toFixed(2)} leva more. `)
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`)
    }
}

godzillaVsKong(['20000', '120', '55.5']);