function carToGo(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let type = ' ';
    let carType = '';
    let price = 0;


    if (budget <= 100) {
        if (season === 'Summer') {
            carType = 'Cabrio';
            price = budget * 0.35;
        } else {
            carType = 'Jeep';
            price = budget * 0.65;
        }
        console.log('Economy class');
    } else if (budget > 100 && budget <= 500) {
        if (season === 'Summer') {
            carType = 'Cabrio';
            price = budget * 0.45;
        } else {
            carType = 'Jeep';
            price = budget * 0.80;
        }
        console.log('Compact class');
    } else {
        carType = 'Jeep';
        if (season === 'Summer' || season === 'Winter') {
            price = budget * 0.90;
        }
        console.log('Luxury class');
    }

    console.log(`${carType} - ${price.toFixed(2)}`);
}

carToGo(['1100', 'Winter']);