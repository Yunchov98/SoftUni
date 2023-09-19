function moving(input) {

    let index = 0;

    let freeSpaceWidth = input[index];
    index++;

    let freeSpaceLength = input[index];
    index++;

    let freeSpaceHeight = input[index];
    index++;

    let command = input[index];
    index++;

    let totalFreeSpace = freeSpaceWidth * freeSpaceLength * freeSpaceHeight;

    while (command !== 'Done') {
        let box = Number(command);
        totalFreeSpace -= box;
        if (totalFreeSpace < 0) {
            break;
        }
        command = input[index];
        index++;
    }

    if (totalFreeSpace > 0) {
        console.log(`${totalFreeSpace} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${Math.abs(totalFreeSpace)} Cubic meters more.`);
    }

}

moving(["10", "1", "2", "4", "6", "Done"]);