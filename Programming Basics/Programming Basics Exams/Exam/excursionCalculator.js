function excursionCalculator(input) {

    let peopleCount = Number(input[0]);
    let season = input[1];

    let price = 0;

    switch (season) {
        case 'spring':
            if (peopleCount <= 5) {
                price = peopleCount * 50.00;
            } else {
                price = peopleCount * 48.00;
            }
            break;
        case 'summer':
            if (peopleCount <= 5) {
                price = peopleCount * 48.50;
            } else {
                price = peopleCount * 45.00;
            }
            break;
        case 'autumn':
            if (peopleCount <= 5) {
                price = peopleCount * 60.00;
            } else {
                price = peopleCount * 49.50;
            }
            break;
        case 'winter':
            if (peopleCount <= 5) {
                price = peopleCount * 86.00;
            } else {
                price = peopleCount * 85.00;
            }
            break;
    }

    if (season === 'summer') {
        price *= 0.85;
    } else if (season === 'winter') {
        price *= 1.08;
    }

    console.log(`${price.toFixed(2)} leva.`);

}

excursionCalculator(["20",
    "winter"])
    ;