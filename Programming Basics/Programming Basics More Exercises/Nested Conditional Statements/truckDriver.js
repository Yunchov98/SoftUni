function truckDriver(input) {

    let season = input[0];
    let kmForMonth = Number(input[1]);

    let priceForOneKm = 0;

    if (kmForMonth <= 5000) {
        switch (season) {
            case 'Spring':
            case 'Autumn': priceForOneKm = 0.75; break;
            case 'Summer': priceForOneKm = 0.90; break;
            case 'Winter': priceForOneKm = 1.05; break;
        }
    } else if (kmForMonth <= 10000) {
        switch (season) {
            case 'Spring':
            case 'Autumn': priceForOneKm = 0.95; break;
            case 'Summer': priceForOneKm = 1.10; break;
            case 'Winter': priceForOneKm = 1.25; break;
        }
    } else {
        switch (season) {
            case 'Spring':
            case 'Autumn':
            case 'Summer':
            case 'Winter': priceForOneKm = 1.45; break;
        }
    }

    let payment = kmForMonth * priceForOneKm;
    let totalPayment = payment * 0.90 * 4;

    console.log(totalPayment.toFixed(2));

}

truckDriver(['Summer', '3455']);