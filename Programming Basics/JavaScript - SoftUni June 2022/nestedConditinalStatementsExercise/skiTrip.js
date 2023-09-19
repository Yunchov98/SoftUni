function skiTrip(input) {

    let stayDays = Number(input[0]);
    let typeOfRoom = input[1];
    let note = input[2];

    let totalPrice = 0;

    switch (typeOfRoom) {
        case 'room for one person': totalPrice = (stayDays - 1) * 18; break;
        case 'apartment': totalPrice = (stayDays - 1) * 25;
            if (stayDays < 10) {
                totalPrice = totalPrice * 0.70;
            } else if (stayDays >= 10 && stayDays <= 15) {
                totalPrice = totalPrice * 0.65;
            } else {
                totalPrice = totalPrice * 0.50;
            }
            break;
        case 'president apartment': totalPrice = (stayDays - 1) * 35;
            if (stayDays < 10) {
                totalPrice = totalPrice * 0.90;
            } else if (stayDays >= 10 && stayDays <= 15) {
                totalPrice = totalPrice * 0.85;
            } else {
                totalPrice = totalPrice * 0.80;
            }
            break;
    }

    if (note === 'positive') {
        totalPrice = totalPrice * 1.25;
    } else {
        totalPrice = totalPrice * 0.90;
    }

    console.log(totalPrice.toFixed(2));

}

skiTrip(["12", "room for one person", "positive"]);