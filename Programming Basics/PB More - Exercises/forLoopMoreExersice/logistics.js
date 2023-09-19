function logistics(input) {

    let index = 0;

    let cargoCount = Number(input[index]);
    index++;

    let price = 0;
    let totalCargo = 0;
    let totalPrice = 0;
    let busCounter = 0;
    let truckCounter = 0;
    let trainCounter = 0;

    for (let cargoTonnage = 1; cargoTonnage <= cargoCount; cargoTonnage++) {
        let currentCargo = Number(input[cargoTonnage])
        if (currentCargo <= 3) {
            price = currentCargo * 200;
            busCounter += currentCargo;
        } else if (currentCargo >= 4 && currentCargo <= 11) {
            price = currentCargo * 175;
            truckCounter += currentCargo;
        } else {
            price = currentCargo * 120;
            trainCounter += currentCargo;
        }
        totalCargo += currentCargo;
        totalPrice += price;
    }

    let avgPrice = totalPrice / totalCargo;
    let totalPriceWithBusInPercent = busCounter / totalCargo * 100;
    let totalPriceWithTruckInPercent = truckCounter / totalCargo * 100;
    let totalPriceWithTrainInPercent = trainCounter / totalCargo * 100;

    console.log(avgPrice.toFixed(2));
    console.log(`${totalPriceWithBusInPercent.toFixed(2)}%`);
    console.log(`${totalPriceWithTruckInPercent.toFixed(2)}%`);
    console.log(`${totalPriceWithTrainInPercent.toFixed(2)}%`);

}

logistics(['4', '1', '5', '16', '3']);