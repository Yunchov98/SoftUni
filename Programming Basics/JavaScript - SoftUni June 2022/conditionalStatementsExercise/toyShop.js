function toyShop(input) {

    let tripPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let tedyBearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCounts = Number(input[5]);

    let moneyEarned = puzzlesCount * 2.60 + dollsCount * 3.00 + tedyBearsCount * 4.10 + minionsCount * 8.20 + trucksCounts * 2.00;
    let allToysCount = puzzlesCount + dollsCount + tedyBearsCount + minionsCount + trucksCounts;

    if (allToysCount >= 50) {
        moneyEarned = moneyEarned - (moneyEarned * 25 / 100);
    }

    let moneyAfterRent = moneyEarned - (moneyEarned * 10 / 100);

    if (moneyAfterRent >= tripPrice) {
        let moneyLeft = moneyAfterRent - tripPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
    } else {
        let diff = Math.abs(tripPrice - moneyAfterRent);
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }
    
}

toyShop(['40.8', '20', '25', '30', '50', '10']);