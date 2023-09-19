function hotelRoom(input) {

    let month = input[0];
    let nightsCount = Number(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case 'May':
        case 'October':
            studioPrice = 50;
            apartmentPrice = 65;
            if (nightsCount > 14) {
                studioPrice = studioPrice * 0.70;
            } else if (nightsCount > 7) {
                studioPrice = studioPrice * 0.95;
            }
            break;
        case 'June':
        case 'September ':
            studioPrice = 75.20;
            apartmentPrice = 68.70;
            if (nightsCount > 14) {
                studioPrice = studioPrice * 0.80;
            }
            break;
        case 'July':
        case 'August':
            studioPrice = 76;
            apartmentPrice = 77;
            break;
    }

    if (nightsCount > 14) {
        apartmentPrice = apartmentPrice * 0.90;
    }

    let totalApartmentPrice = apartmentPrice * nightsCount;
    let totalStudioPrice = studioPrice * nightsCount;

    console.log(`Apartment: ${totalApartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStudioPrice.toFixed(2)} lv.`);

}

hotelRoom(["May", "15"]);