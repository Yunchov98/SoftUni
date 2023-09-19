function carFactory(carData) {
    if (carData.power <= 90) {
        delete carData.power;
        carData.engine = {
            power: 90,
            volume: 1800,
        };
    } else if (carData.power <= 120) {
        delete carData.power;
        carData.engine = {
            power: 120,
            volume: 2400,
        };
    } else if (carData.power <= 200) {
        delete carData.power;
        carData.engine = {
            power: 200,
            volume: 3500,
        };
    }

    if (carData.carriage === 'hatchback') {
        delete carData.carriage;
        carData.carriage = {
            type: 'hatchback',
            color: carData.color,
        };

        delete carData.color;
    } else if (carData.carriage === 'coupe') {
        delete carData.carriage;
        carData.carriage = {
            type: 'coupe',
            color: carData.color,
        };

        delete carData.color;
    }

    if (carData.wheelsize % 2 === 0) {
        carData.wheelsize -= 1;
        carData.wheels = [0, 0, 0, 0].fill(carData.wheelsize);
        delete carData.wheelsize;
    } else {
        carData.wheels = [0, 0, 0, 0].fill(carData.wheelsize);
        delete carData.wheelsize;
    }

    return carData;
}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
);
console.log('-------------');
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
);