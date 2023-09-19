function movieDestination(input) {

    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let daysCount = Number(input[3]);

    let price = 0;

    switch (destination) {
        case 'Dubai':
            if (season === 'Summer') {
                price = 40000;
            } else {
                price = 45000;
            }
            break;
        case 'Sofia':
            if (season === 'Summer') {
                price = 12500;
            } else {
                price = 17000;
            }
            break;
        case 'London':
            if (season === 'Summer') {
                price = 20250;
            } else {
                price = 24000;
            }
            break;
    }

    let totalPrice = price * daysCount;

    if (destination === 'Dubai') {
        totalPrice *= 0.70;
    } else if (destination === 'Sofia') {
        totalPrice *= 1.25;
    }

    let diff = Math.abs(budget - totalPrice);

    if (budget >= totalPrice) {
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${diff.toFixed(2)} leva more!`);
    }

}

movieDestination(["400000",
    "Sofia",
    "Winter",
    "20"])
    ;