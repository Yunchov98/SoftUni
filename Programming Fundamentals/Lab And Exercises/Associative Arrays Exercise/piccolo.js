function piccolo(carInfo) {
    const parkingInfo = {};

    carInfo.forEach(line => {
        const [direction, carNumber] = line.split(', ');

        if (direction === 'IN') {
            parkingInfo[carNumber] = carNumber;
        } else if (direction === 'OUT') {
            delete parkingInfo[carNumber];
        }
    });

    const lengthOfTheParkingInfo = Object.keys(parkingInfo).length;
    if (lengthOfTheParkingInfo === 0) {
        console.log('Parking Lot is Empty');
        return;
    }

    const sortedEntries = Object.entries(parkingInfo).sort(([carA, carNumberA], [carB, carNumberB]) => carNumberA.localeCompare(carNumberB));
    for (const [car, carNumber] of sortedEntries) {
        console.log(carNumber);
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);