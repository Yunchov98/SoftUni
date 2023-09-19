function counterStrike(array) {

    let energy = Number(array.shift());

    let winCounter = 0;

    while (array[0] !== 'End of battle') {
        let distance = Number(array.shift());

        if (energy >= distance) {
            winCounter++;
            energy -= distance;
        } else {
            console.log(`Not enough energy! Game ends with ${winCounter} won battles and ${energy} energy`);
            return;
        }

        if (winCounter % 3 === 0) {
            energy += winCounter;
        }
    }

    console.log(`Won battles: ${winCounter}. Energy left: ${energy}`);

}

counterStrike((["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])

);