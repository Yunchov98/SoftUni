function roadRadar(speed, area) {
    const limit = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    }

    if (speed <= limit[area]) {
        console.log(`Driving ${speed} km/h in a ${limit[area]} zone`);
    } else {
        let status = ''

        if (speed <= limit[area] + 20) {
            status = 'speeding';
        } else if (speed > limit[area] + 20 && speed <= limit[area] + 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        const difference = speed - limit[area];
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit[area]} - ${status}`);
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');