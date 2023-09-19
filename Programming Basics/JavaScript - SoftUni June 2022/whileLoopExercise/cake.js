function cake(input) {

    let index = 0;

    let cakeWidth = Number(input[index]);
    index++;

    let cakeLength = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let totalCakePiece = cakeWidth * cakeLength;

    while (command !== 'STOP') {
        let takenPieces = Number(command);
        totalCakePiece -= takenPieces;
        if (totalCakePiece < 0) {
            break;
        }
        command = input[index];
        index++;
    }

    if (command === 'STOP') {
        console.log(`${Math.abs(totalCakePiece)} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${Math.abs(totalCakePiece)} pieces more.`);
    }

}

cake(["10", "2", "2", "4", "6", "STOP"]);