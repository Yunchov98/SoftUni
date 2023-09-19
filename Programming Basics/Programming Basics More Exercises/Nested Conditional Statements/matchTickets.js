function matchTickets(input) {

    let budget = Number(input[0]);
    let category = input[1];
    let peopleCount = Number(input[2]);

    let price = 0;
    let transportPrice = 0;

    switch (category) {
        case 'VIP': price = 499.99; break;
        case 'Normal': price = 249.99; break;
    }

    if (peopleCount >= 1 && peopleCount <= 4) {
        transportPrice = budget * 0.75;
    } else if (peopleCount >= 5 && peopleCount <= 9) {
        transportPrice = budget * 0.60;
    } else if (peopleCount >= 10 && peopleCount <= 24) {
        transportPrice = budget * 0.50;
    } else if (peopleCount >= 25 && peopleCount <= 49) {
        transportPrice = budget * 0.40;
    } else {
        transportPrice = budget * 0.25;
    }

    let totalSum = (price * peopleCount) + transportPrice;
    let diff = Math.abs(budget - totalSum);

    if (budget >= totalSum) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }

}

matchTickets(['30000', 'VIP', '49']);