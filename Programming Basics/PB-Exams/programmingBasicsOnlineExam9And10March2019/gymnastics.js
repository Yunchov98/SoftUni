function gymnastics(input) {

    let country = input[0];
    let device = input[1];

    let difficulty = 0;
    let performance = 0;

    switch (device) {
        case 'ribbon':
            if (country === 'Russia') {
                difficulty = 9.100;
                performance = 9.400;
            } else if (country === 'Bulgaria') {
                difficulty = 9.600;
                performance = 9.400;
            } else if (country === 'Italy') {
                difficulty = 9.200;
                performance = 9.500;
            }
            break;
        case 'hoop':
            if (country === 'Russia') {
                difficulty = 9.300;
                performance = 9.800;
            } else if (country === 'Bulgaria') {
                difficulty = 9.550;
                performance = 9.750;
            } else if (country === 'Italy') {
                difficulty = 9.450;
                performance = 9.350;
            }
            break;
        case 'rope':
            if (country === 'Russia') {
                difficulty = 9.600;
                performance = 9.000;
            } else if (country === 'Bulgaria') {
                difficulty = 9.500;
                performance = 9.400;
            } else if (country === 'Italy') {
                difficulty = 9.700;
                performance = 9.150;
            }
            break;
    }

    let totalPoint = difficulty + performance;
    let percent = (20 - totalPoint) / 20 * 100;

    console.log(`The team of ${country} get ${totalPoint.toFixed(3)} on ${device}.`);
    console.log(`${percent.toFixed(2)}%`);
}

gymnastics(['Bulgaria', 'ribbon']);