function filmPremiere(input) {

    let moiveName = input[0];
    let type = input[1];
    let ticektsCount = Number(input[2]);

    let price = 0;

    switch (moiveName) {
        case 'John Wick':
            if (type === 'Drink') {
                price = 12.00;
            } else if (type === 'Popcorn') {
                price = 15.00;
            } else {
                price = 19.00;
            }
            break;
        case 'Star Wars':
            if (type === 'Drink') {
                price = 18.00;
            } else if (type === 'Popcorn') {
                price = 25.00;
            } else {
                price = 30.00;
            }
            break;
        case 'Jumanji':
            if (type === 'Drink') {
                price = 9.00;
            } else if (type === 'Popcorn') {
                price = 11.00;
            } else {
                price = 14.00;
            }
            break;
    }

    let totalPrice = price * ticektsCount;

    if (moiveName === 'Star Wars' && ticektsCount >= 4) {
        totalPrice *= 0.70;
    } else if (moiveName === 'Jumanji' && ticektsCount === 2) {
        totalPrice *= 0.85;
    }

    console.log(`Your bill is ${totalPrice.toFixed(2)} leva.`);

}

filmPremiere(["John Wick",
    "Drink",
    "6"])
    ;