function theLift(array) {

    let people = Number(array.shift())
    let emptySlots = array.shift().split(' ').map(Number);

    for (let i = 0; i < emptySlots.length; i++) {
        if (emptySlots[i] < 4) {
            if (people >= 4 - emptySlots[i]) {
                people -= 4 - emptySlots[i];
                emptySlots[i] = 4;
            } else {
                emptySlots[i] += people;
                people = 0;
                break;
            }
        }
    }

    let isNotFull = false;

    for (let el of emptySlots) {

        if (el < 4) {
            isNotFull = true;
            break;
        }
    }

    if (isNotFull && people === 0) {
        console.log(`The lift has empty spots!`);
    } else if (!isNotFull && people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
    }

    console.log(`${emptySlots.join(' ')}`);

}

theLift([
    "15",
    "0 0 0 0 0"
]
);