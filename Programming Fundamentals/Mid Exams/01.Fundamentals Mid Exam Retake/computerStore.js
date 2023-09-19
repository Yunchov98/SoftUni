function computerStore(array) {

    let type = array.pop().toLowerCase();

    let totalPriceWithoutTaxes = 0;

    for (let el of array) {
        let currentPrice = Number(el);

        if (currentPrice < 0) {
            console.log('Invalid price!');
            continue;
        } else {
            totalPriceWithoutTaxes += currentPrice;
        }
    }

    let taxes = totalPriceWithoutTaxes * 0.20;
    let totalPrice = totalPriceWithoutTaxes + taxes;

    if (type === 'special') {
        totalPrice *= 0.90;
    }

    if (totalPrice === 0) {
        console.log('Invalid order!');
    } else {
        console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${totalPriceWithoutTaxes.toFixed(2)}$
    Taxes: ${taxes.toFixed(2)}$
    -----------
    Total price: ${totalPrice.toFixed(2)}$`);
    }
}

computerStore(([
    'regular'
])

);