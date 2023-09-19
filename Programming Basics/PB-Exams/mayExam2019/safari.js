function safari(input) {

    let budget = Number(input[0]);
    let gasNeeded = Number(input[1]);
    let dayOfWeek = input[2];

    let totalPriceForGas = gasNeeded * 2.10;
    let totalPrice = totalPriceForGas + 100;

    if (dayOfWeek === 'Saturday') {
        totalPrice = totalPrice - (totalPrice * 10 / 100);
    } else if (dayOfWeek === 'Sunday') {
        totalPrice = totalPrice - (totalPrice * 20 / 100);
    }

    if (budget >= totalPrice) {
        console.log(`Safari time! Money left: ${(budget - totalPrice).toFixed(2)} lv.`)
    } else {
        console.log(`Not enough money! Money needed: ${(totalPrice - budget).toFixed(2)} lv.`)
    }
}

safari(['120', '30', 'Saturday']);