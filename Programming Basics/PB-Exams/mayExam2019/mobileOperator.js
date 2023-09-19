function mobileOperator(input) {

    let durationOfContract = input[0];
    let contractType = input[1];
    let mobileInternet = input[2];
    let monthsCount = Number(input[3]);

    let price = 0;

    if (durationOfContract === 'one') {
        switch (contractType) {
            case 'Small': price = 9.98; break;
            case 'Middle': price = 18.99; break;
            case 'Large': price = 25.98; break;
            case 'ExtraLarge': price = 35.99; break;
        }
    } else if (durationOfContract === 'two') {
        switch (contractType) {
            case 'Small': price = 8.58; break;
            case 'Middle': price = 17.09; break;
            case 'Large': price = 23.59; break;
            case 'ExtraLarge': price = 31.79; break;
        }
    }

    if (mobileInternet === 'yes' && price < 10) {
        price = price + 5.50;
    } else if (mobileInternet === 'yes' && price <= 30) {
        price = price + 4.35;
    } else if (mobileInternet === 'yes' && price > 30) {
        price = price + 3.85;
    }

    if (durationOfContract === 'two') {
        price = price - (price * 3.75 / 100);
    }

    console.log(`${(price * monthsCount).toFixed(2)} lv.`)
}

mobileOperator(['two', 'Large', 'no', '10']);