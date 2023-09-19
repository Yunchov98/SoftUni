function fuelTank(input) {

    let typeOfGas = input[0];
    let litersInTank = Number(input[1]);

    if (litersInTank >= 25) {
        if (typeOfGas === 'Diesel') {
            console.log(`You have enough diesel.`);
        } else if (typeOfGas === 'Gasoline') {
            console.log(`You have enough gasoline.`);
        } else if (typeOfGas === 'Gas') {
            console.log(`You have enough gas.`);
        } else {
            console.log(`Invalid fuel!`);
        }
    } else {
        if (typeOfGas === 'Diesel') {
            console.log(`Fill your tank with diesel!`);
        } else if (typeOfGas === 'Gasoline') {
            console.log(`Fill your tank with gasoline!`);
        } else if (typeOfGas === 'Gas') {
            console.log(`Fill your tank with gas!`);
        } else{
            console.log(`Invalid fuel!`);
        }
    }

}

fuelTank(['Diesel', '10']);