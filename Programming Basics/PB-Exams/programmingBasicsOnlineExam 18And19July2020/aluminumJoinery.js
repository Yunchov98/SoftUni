function aluminumJoinery(input) {

    let joineryCount = Number(input[0]);
    let type = input[1];
    let delivery = input[2];

    let price = 0;

    switch (type) {
        case '90X130':
            price = 110;
            if (joineryCount > 60) {
                price *= 0.92;
            } else if (joineryCount > 30) {
                price *= 0.95;
            }
            break;
        case '100X150':
            price = 140.00;
            if (joineryCount > 80) {
                price *= 0.90;
            } else if (joineryCount > 40) {
                price *= 0.94;
            }
            break;
        case '130X180':
            price = 190.00;
            if (joineryCount > 50) {
                price *= 0.88;
            } else if (joineryCount > 20) {
                price *= 0.93;
            }
            break;
        case '200X300':
            price = 250.00;
            if (joineryCount > 50) {
                price *= 0.86;
            } else if (joineryCount > 25) {
                price *= 0.91;
            }
            break;
    }

    let totalPrice = joineryCount * price;

    if (delivery === 'With delivery') {
        totalPrice += 60;
    }

    if (joineryCount > 99) {
        totalPrice *= 0.96;
    }

    if (joineryCount < 10) {
        console.log('Invalid order');
    } else {
        console.log(`${totalPrice.toFixed(2)} BGN`);
    }

}

aluminumJoinery(["40",
    "90X130",
    "Without delivery"])
    ;