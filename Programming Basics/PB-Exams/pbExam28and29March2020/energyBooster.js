function energyBooster(input) {

    let fruit = input[0];
    let size = input[1];
    let count = Number(input[2]);

    let price = 0;

    if (size === 'small') {
        switch (fruit) {
            case 'Watermelon': price = 2 * 56.00; break;
            case 'Mango': price = 2 * 36.66; break;
            case 'Pineapple': price = 2 * 42.10; break;
            case 'Raspberry': price = 2 * 20.00; break;
        }
    } else if (size === 'big') {
        switch (fruit) {
            case 'Watermelon': price = 5 * 28.70; break;
            case 'Mango': price = 5 * 19.60; break;
            case 'Pineapple': price = 5 * 24.80; break;
            case 'Raspberry': price = 5 * 15.20; break;
        }
    }

    let totalPrice = price * count;

    if (totalPrice >= 400 && totalPrice <= 1000) {
        totalPrice *= 0.85;
    } else if(totalPrice > 1000) {
        totalPrice *= 0.50;
    }

    console.log(`${totalPrice.toFixed(2)} lv.`);

}

energyBooster(["Pineapple",
"small",
"1"])
;