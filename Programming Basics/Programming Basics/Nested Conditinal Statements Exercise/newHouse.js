function newHouse(input) {

    let flowersType = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;

    switch (flowersType) {
        case 'Roses':
            price = flowersCount * 5;
            if (flowersCount > 80) {
                price = price * 0.90;
            }
            break;
        case 'Dahlias':
            price = flowersCount * 3.80;
            if (flowersCount > 90) {
                price = price * 0.85;
            }
            break;
        case 'Tulips':
            price = flowersCount * 2.80;
            if (flowersCount > 80) {
                price = price * 0.85;
            }
            break;
        case 'Narcissus':
            price = flowersCount * 3.00;
            if (flowersCount < 120) {
                price = price * 1.15;
            }
            break;
        case 'Gladiolus':
            price = flowersCount * 2.50;
            if (flowersCount < 80) {
                price = price * 1.20;
            }
            break;
    }

    let diff = Math.abs(budget - price);

    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }

}

newHouse(["Roses", "55", "250"]);