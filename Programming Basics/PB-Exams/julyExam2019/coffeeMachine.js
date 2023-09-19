function coffeeMachine(input) {

    let drink = input[0];
    let type = input[1];
    let drinksCount = Number(input[2]);
    let price = 0;

    if (drink === 'Espresso') {
        switch (type) {
            case 'Without': price = 0.90; break;
            case 'Normal': price = 1; break;
            case 'Extra': price = 1.20; break;
        }
    } else if (drink === 'Cappuccino') {
        switch (type) {
            case 'Without': price = 1; break;
            case 'Normal': price = 1.20; break;
            case 'Extra': price = 1.60; break;
        }
    } else if (drink === 'Tea') {
        switch (type) {
            case 'Without': price = 0.50; break;
            case 'Normal': price = 0.60; break;
            case 'Extra': price = 0.70; break;
        }
    }

    if (type === 'Without') {
        price = price - (price * 35 / 100);
    }

    if (drink === 'Espresso' && drinksCount >= 5) {
        price = price - (price * 25 / 100);
    }

    let total = price * drinksCount;

    if (total > 15) {
        total = total - (total * 20 / 100);
    }

    console.log(`You bought ${drinksCount} cups of ${drink} for ${total.toFixed(2)} lv.`);
}

coffeeMachine(["Tea",
"Extra",
"3"]);
