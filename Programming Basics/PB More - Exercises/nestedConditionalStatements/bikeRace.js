function bikeRace(input) {

    let juniorBikersCount = Number(input[0]);
    let seniorBikersCount = Number(input[1]);
    let typeOfTrack = input[2];


    let juniorsTax = 0;
    let seniorsTax = 0;

    switch (typeOfTrack) {
        case 'trail':
            juniorsTax = 5.50;
            seniorsTax = 7.00;
            break;
        case 'cross-country':
            juniorsTax = 8.00;
            seniorsTax = 9.50;
            break;
        case 'downhill':
            juniorsTax = 12.25;
            seniorsTax = 13.75;
            break;
        case 'road':
            juniorsTax = 20.00;
            seniorsTax = 21.50;
            break;
    }

    if (typeOfTrack === 'cross-country' && juniorBikersCount + seniorBikersCount >= 50) {
        juniorsTax = juniorsTax * 0.75;
        seniorsTax = seniorsTax * 0.75;
    }

    let totalSumForJuniors = juniorsTax * juniorBikersCount;
    let totalSumForSeniors = seniorsTax * seniorBikersCount;
    let totalSum = totalSumForJuniors + totalSumForSeniors;
    let moneyForCosts = totalSum * 0.95;
    let donatedSum = totalSum = moneyForCosts;

    console.log(donatedSum.toFixed(2));

}

bikeRace(['10', '20', 'trail']);