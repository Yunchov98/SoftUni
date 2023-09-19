function worldSnookerChampionship(input) {

    let type = input[0];
    let ticket = input[1];
    let ticketsCount = Number(input[2]);
    let isPhoto = input[3];

    let ticketPrice = 0;
    let photoPrice = 40;

    switch (ticket) {
        case 'Standard':
            if (type === 'Quarter final') {
                ticketPrice = 55.50;
            } else if (type === 'Semi final') {
                ticketPrice = 75.88;
            } else {
                ticketPrice = 110.10;
            }
            break;
        case 'Premium':
            if (type === 'Quarter final') {
                ticketPrice = 105.20;
            } else if (type === 'Semi final') {
                ticketPrice = 125.22;
            } else {
                ticketPrice = 160.66;
            }
            break;
        case 'VIP':
            if (type === 'Quarter final') {
                ticketPrice = 118.90;
            } else if (type === 'Semi final') {
                ticketPrice = 300.40;
            } else {
                ticketPrice = 400.00;
            }
            break;
    }

    let totalPrice = ticketsCount * ticketPrice;

    if (totalPrice > 4000) {
        totalPrice *= 0.75;
        photoPrice = 0;
    } else if (totalPrice > 2500) {
        totalPrice *= 0.90;
    }

    if (isPhoto === 'Y' && totalPrice <= 4000) {
        totalPrice += ticketsCount * photoPrice;
    }

    console.log(totalPrice.toFixed(2));

}

worldSnookerChampionship(['Final', 'Premium', '25', 'Y']);