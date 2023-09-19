function vacation(groupOfPeople, typeOfTheGroup, day) {

    let totalPrice = 0;

    switch (typeOfTheGroup) {
        case 'Students':
            if (day === 'Friday') {
                totalPrice = groupOfPeople * 8.45;
            } else if (day === 'Saturday') {
                totalPrice = groupOfPeople * 9.80;
            } else if (day === 'Sunday') {
                totalPrice = groupOfPeople * 10.46;
            }
            if (groupOfPeople >= 30) {
                totalPrice *= 0.85;
            }
            break;
        case 'Business':
            if (groupOfPeople >= 100) {
                groupOfPeople -= 10;
            }
            if (day === 'Friday') {
                totalPrice = groupOfPeople * 10.90;
            } else if (day === 'Saturday') {
                totalPrice = groupOfPeople * 15.60;
            } else if (day === 'Sunday') {
                totalPrice = groupOfPeople * 16.00;
            }
            break;
        case 'Regular':
            if (day === 'Friday') {
                totalPrice = groupOfPeople * 15.00;
            } else if (day === 'Saturday') {
                totalPrice = groupOfPeople * 20.00;
            } else if (day === 'Sunday') {
                totalPrice = groupOfPeople * 22.50;
            }
            if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                totalPrice *= 0.95;
            }
            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

vacation(40, "Regular", "Saturday");