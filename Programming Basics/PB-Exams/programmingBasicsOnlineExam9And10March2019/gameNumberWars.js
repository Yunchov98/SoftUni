function gameNumberWars(input) {

    let index = 0;

    let firstPlayerName = input[index];
    index++;
    let secondPlayerName = input[index];
    index++;
    let command = input[index];
    index++;

    let firstPlayerPoints = 0;
    let secondPlayerPoints = 0;

    while (command !== 'End of game') {
        let firstCard = Number(command);
        let secondCard = Number(input[index]);
        index++;

        if (firstCard > secondCard) {
            firstPlayerPoints += firstCard - secondCard;
        } else if (firstCard < secondCard) {
            secondPlayerPoints += secondCard - firstCard;
        }
        if (firstCard === secondCard) {
            console.log('Number wars!')
            firstCard = Number(input[index]);
            index++
            secondCard = Number(input[index]);
            index++;
            if (firstCard > secondCard) {
                console.log(`${firstPlayerName} is winner with ${firstPlayerPoints} points`);
                break;
            } else if (firstCard < secondCard) {
                console.log(`${secondPlayerName} is winner with ${secondPlayerPoints} points`);
                break;
            }
        }
        command = input[index];
        index++;
    }

    if (command === 'End of game') {
        console.log(`${firstPlayerName} has ${firstPlayerPoints} points`);
        console.log(`${secondPlayerName} has ${secondPlayerPoints} points`);
    }

}

gameNumberWars(["Elena",
    "Simeon",
    "6",
    "3",
    "2",
    "5",
    "8",
    "9",
    "End of game"])
    ;