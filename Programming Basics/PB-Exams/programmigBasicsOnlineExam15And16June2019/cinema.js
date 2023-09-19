function cinema(input) {

    let index = 0;

    let freeSpace = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let totalPrice = 0;
    let peopleCounter = 0;

    while (command !== 'Movie time!') {
        let people = Number(command);
        peopleCounter += people;

        if (peopleCounter > freeSpace) {
            console.log('The cinema is full.');
            break;
        }

        if (people % 3 === 0) {
            totalPrice += (people * 5) - 5;
        } else {
            totalPrice += people * 5;
        }

        command = input[index];
        index++;
    }

    let diff = Math.abs(peopleCounter - freeSpace);
    if (peopleCounter <= freeSpace) {
        console.log(`There are ${diff} seats left in the cinema.`);
    }

    console.log(`Cinema income - ${totalPrice} lv.`);

}

cinema(["50",
    "15",
    "10",
    "10",
    "15",
    "5"])
    ;