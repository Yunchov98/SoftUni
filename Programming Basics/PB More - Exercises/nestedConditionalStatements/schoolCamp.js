function schoolCamp(input) {

    let season = input[0];
    let groupType = input[1];
    let studentsCount = Number(input[2]);
    let nightsCount = Number(input[3]);

    let priceForOneNight = 0;

    if (season === 'Winter') {
        switch (groupType) {
            case 'boys':
            case 'girls': priceForOneNight = 9.60; break;
            case 'mixed': priceForOneNight = 10.00; break;
        }
    } else if (season === 'Spring') {
        switch (groupType) {
            case 'boys':
            case 'girls': priceForOneNight = 7.20; break;
            case 'mixed': priceForOneNight = 9.50; break;
        }
    } else if (season === 'Summer') {
        switch (groupType) {
            case 'boys':
            case 'girls': priceForOneNight = 15.00; break;
            case 'mixed': priceForOneNight = 20.00; break;
        }
    }

    let totalPrice = studentsCount * priceForOneNight * nightsCount;

    if (studentsCount >= 50) {
        totalPrice = totalPrice * 0.50;
    } else if (studentsCount >= 20 && studentsCount < 50) {
        totalPrice = totalPrice * 0.85;
    } else if (studentsCount >= 10 && studentsCount < 20) {
        totalPrice = totalPrice * 0.95;
    }

    let sport = '';

    if (season === 'Winter') {
        switch (groupType) {
            case 'girls': sport = 'Gymnastics'; break
            case 'boys': sport = 'Judo'; break;
            case 'mixed': sport = 'Ski'; break;
        }
    } else if (season === 'Spring') {
        switch (groupType) {
            case 'girls': sport = 'Athletics'; break;
            case 'boys': sport = 'Tennis'; break;
            case 'mixed': sport = 'Cycling'; break;
        }
    } else if (season === 'Summer') {
        switch (groupType) {
            case 'girls': sport = 'Volleyball'; break;
            case 'boys': sport = 'Football'; break;
            case 'mixed': sport = 'Swimming'; break;
        }
    }

    console.log(`${sport} ${totalPrice.toFixed(2)} lv.`);
}

schoolCamp(['Spring', 'girls', '20', '7']);