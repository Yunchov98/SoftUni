function fitnessCard(input) {

    let budget = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sport = input[3];

    let price = 0;

    if (gender === 'm') {
        switch (sport) {
            case 'Gym': price = 42.00; break;
            case 'Boxing': price = 41.00; break;
            case 'Yoga': price = 45.00; break;
            case 'Zumba': price = 34.00; break;
            case 'Dances': price = 51.00; break;
            case 'Pilates': price = 39.00; break;
        }
    } else if (gender === 'f') {
        switch (sport) {
            case 'Gym': price = 35.00; break;
            case 'Boxing': price = 37.00; break;
            case 'Yoga': price = 42.00; break;
            case 'Zumba': price = 31.00; break;
            case 'Dances': price = 53.00; break;
            case 'Pilates': price = 37.00; break;
        }
    }

    if (age <= 19) {
        price *= 0.80;
    }

    let diff = Math.abs(price - budget);

    if (budget >= price) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        console.log(`You don't have enough money! You need $${diff.toFixed(2)} more.`);
    }

}

fitnessCard(['10', 'm', '50', 'Pilates']);