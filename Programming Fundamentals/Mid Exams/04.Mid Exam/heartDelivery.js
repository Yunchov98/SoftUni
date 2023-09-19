function heartDelivery(array) {

    let neighborhood = array.shift().split('@').map(Number);
    let startPosition = 0;
    let houseCount = neighborhood.length;

    while (array[0] !== 'Love!') {

        let command = array.shift().split(' ');
        let jump = Number(command[1]);

        startPosition += jump;

        if (startPosition >= neighborhood.length) {
            startPosition = 0;
        }

        if (neighborhood[startPosition] === 0) {
            console.log(`Place ${startPosition} already had Valentine's day.`);
        } else {
            neighborhood[startPosition] -= 2;
            if (neighborhood[startPosition] === 0) {
                console.log(`Place ${startPosition} has Valentine's day.`);
                houseCount--;
            }
        }
    }

    console.log(`Cupid's last position was ${startPosition}.`);

    if (houseCount === 0) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${houseCount} places.`);
    }
}

heartDelivery((["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"])
);