function travelAgency(input) {

    let nameOfTheCity = input[0];
    let typeOfPackage = input[1];
    let discount = input[2];
    let days = Number(input[3]);
    let price = 0

    if (nameOfTheCity === 'Bansko' || nameOfTheCity === 'Borovets') {
        switch (typeOfPackage) {
            case 'withEquipment': price = 100; break;
            case 'noEquipment': price = 80; break;
        }
    }

    if (nameOfTheCity === 'Bansko' && typeOfPackage === 'withEquipment' && discount === 'yes' || nameOfTheCity === 'Borovets' && typeOfPackage === 'withEquipment' && discount === 'yes') {
        price = price - (price * 10 / 100);
    } else if (nameOfTheCity === 'Bansko' && typeOfPackage === 'noEquipment' && discount === 'yes' || nameOfTheCity === 'Borovets' && typeOfPackage === 'noEquipment' && discount === 'yes') {
        price = price - (price * 5 / 100);
    }

    if (nameOfTheCity === 'Varna' || nameOfTheCity === 'Burgas') {
        switch (typeOfPackage) {
            case 'withBreakfast': price = 130;
            case 'noBreakfast': price = 100;
        }
    }

    if (nameOfTheCity === 'Varna' && typeOfPackage === 'withBreakfast' && discount === 'yes' || nameOfTheCity === 'Burgas' && typeOfPackage === 'withBreakfast' && discount === 'yes') {
        price = price - (price * 12 / 100);
    } else if (nameOfTheCity === 'Varna' && typeOfPackage === 'noBreakfast' && discount === 'yes' || nameOfTheCity === 'Burgas' && typeOfPackage === 'noBreakfast' && discount === 'yes') {
        price = price - (price * 7 / 100);
    }

    if(days < 1){
        days += 1;
    }

    if (nameOfTheCity === 'Bansko' && days >= 1 || nameOfTheCity === 'Borovets' && days >= 1 || nameOfTheCity === 'Varna' && days >= 1 || nameOfTheCity === 'Burgas' && days >= 1) {
        console.log(`The price is ${price.toFixed(2)} lv! Have a nice time!`)
    }

    if (days < 1) {
        console.log('Days must be positive number!');
    }

    if (nameOfTheCity !== 'Bansko' && typeOfPackage !== 'withEquipment' && typeOfPackage !== 'noEquipment' || nameOfTheCity !== 'Borovets' && typeOfPackage !== 'withEquipment' && typeOfPackage !== 'noEquipment' || nameOfTheCity !== 'Varna' && typeOfPackage !== 'withBreakfast' && typeOfPackage !== 'noBreakfast' || nameOfTheCity !== 'Burgas' && typeOfPackage !== 'withBreakfast' && typeOfPackage !== 'noBreakfast') {
        console.log('Invalid input');
    }
}

travelAgency(['Borovets', 'noEquipment', 'yes', '6']);