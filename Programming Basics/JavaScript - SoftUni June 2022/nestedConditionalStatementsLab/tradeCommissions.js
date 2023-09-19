function tradeCommissions(input) {

    let town = input[0];
    let salesVolume = Number(input[1]);

    let brokerage = 0;

    if (salesVolume >= 0 && salesVolume <= 500) {
        switch (town) {
            case 'Sofia': brokerage = salesVolume * 5 / 100; break;
            case 'Varna': brokerage = salesVolume * 4.5 / 100; break;
            case 'Plovdiv': brokerage = salesVolume * 5.5 / 100; break;
        }
    } else if (salesVolume > 500 && salesVolume <= 1000) {
        switch (town) {
            case 'Sofia': brokerage = salesVolume * 7 / 100; break;
            case 'Varna': brokerage = salesVolume * 7.5 / 100; break;
            case 'Plovdiv': brokerage = salesVolume * 8 / 100; break;
        }
    } else if (salesVolume > 100 && salesVolume <= 10000) {
        switch (town) {
            case 'Sofia': brokerage = salesVolume * 8 / 100; break;
            case 'Varna': brokerage = salesVolume * 10 / 100; break;
            case 'Plovdiv': brokerage = salesVolume * 12 / 100; break;
        }
    } else {
        switch (town) {
            case 'Sofia': brokerage = salesVolume * 12 / 100; break;
            case 'Varna': brokerage = salesVolume * 13 / 100; break;
            case 'Plovdiv': brokerage = salesVolume * 14.5 / 100; break;
        }
    }

    if (town === 'Sofia' || town === 'Varna' || town === 'Plovdiv' && salesVolume > 0) {
        console.log(brokerage.toFixed(2));
    } else {
        console.log('error');
    }

}

tradeCommissions(['Kaspichan', '50']);