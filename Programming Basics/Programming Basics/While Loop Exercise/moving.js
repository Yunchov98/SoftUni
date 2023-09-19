function moving(input) {

    let index = 0;

    let freeSpaceWidth = Number(input[index]);
    index++;
    let freeSpaceLength = Number(input[index]);
    index++;
    let freeSpaceHeight = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let roomVolume = freeSpaceWidth * freeSpaceLength * freeSpaceHeight;

    while (command !== 'Done') {
        let box = Number(command);
        roomVolume -= box;
        if (roomVolume < 0) {
            break;
        }
        command = input[index];
        index++;
    }

    if (roomVolume > 0) {
        console.log(`${roomVolume} Cubic meters left.`)
    } else {
        console.log(`No more free space! You need ${Math.abs(roomVolume)} Cubic meters more.`);
    }

}

moving(['10', '10', '2', '20', '20', '20', '20', '122']);