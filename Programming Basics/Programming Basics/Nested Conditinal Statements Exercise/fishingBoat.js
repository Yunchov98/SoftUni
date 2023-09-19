function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishermanCount = Number(input[2]);

    let price = 0;

    switch (season) {
        case 'Spring':
            price = 3000;
            break;
        case 'Summer':
        case 'Autumn':
            price = 4200;
            break;
        case 'Winter':
            price = 2600;
            break;
    }

    if (fishermanCount <= 6) {
        price = price * 0.90;
    } else if (fishermanCount >= 7 && fishermanCount <= 11) {
        price = price * 0.85;
    } else {
        price = price * 0.75;
    }

    if (fishermanCount % 2 === 0 && season !== 'Autumn') {
        price = price * 0.95;
    }

    let diff = Math.abs(budget - price);

    if (budget >= price) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }

}

fishingBoat(["3000",
    "Summer",
    "11"])
    ;