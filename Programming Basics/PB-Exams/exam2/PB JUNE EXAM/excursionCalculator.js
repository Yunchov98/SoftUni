function excursionCalculator(input) {

    let peopleCount = Number(input[0]);
    let season = input[1];

    let price = 0;

    switch (season) {
        case 'spring':
            if (peopleCount <= 5) {
                price = 50.00;
            } else {
                price = 48.00;
            }
            break;
        case 'summer':
            if (peopleCount <= 5) {
                price = 48.50;
            } else {
                price = 45.00;
            }
            break;
        case 'autumn':
            if (peopleCount <= 5) {
                price = 60.00;
            } else {
                price = 49.50;
            }
            break;
        case 'winter':
            if (peopleCount <= 5) {
                price = 86.00;
            } else {
                price = 85.00;
            }
            break;
    }

    let totalPrice = price * peopleCount;

    if (season === 'summer') {
        totalPrice *= 0.85;
    } else if (season === 'winter') {
        totalPrice *= 1.08;
    }

    console.log(`${totalPrice.toFixed(2)} leva.`);

}

excursionCalculator(['20', 'winter']);