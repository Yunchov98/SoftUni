function fuelTankPartTwo(input) {

    let typeOfGas = input[0];
    let gasQuantity = Number(input[1]);
    let isThereAClubCard = input[2];

    let price = 0;

    if (typeOfGas === 'Gas') {
        price = 0.93;
    } else if (typeOfGas === 'Gasoline') {
        price = 2.22;
    } else if (typeOfGas === 'Diesel') {
        price = 2.33;
    }

    if (isThereAClubCard === 'Yes') {
        switch (typeOfGas) {
            case 'Gas': price = price - 0.08; break;
            case 'Gasoline': price = price - 0.18; break;
            case 'Diesel': price = price - 0.12; break;
        }
    }

    let total = gasQuantity * price;

    if (gasQuantity >= 20 && gasQuantity <= 25) {
        total = total - (total * 8 / 100);
    } else if (gasQuantity > 25) {
        total = total - (total * 10 / 100);
    }

    console.log(`${total.toFixed(2)} lv.`)

}

fuelTankPartTwo(['Diesel', '19', 'No']);