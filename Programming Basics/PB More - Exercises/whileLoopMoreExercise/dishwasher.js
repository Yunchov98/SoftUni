function dishwasher(input) {

    let index = 0;

    let detergentBottelsCount = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let detergentCol = detergentBottelsCount * 750;
    let days = 1;
    let plates = 0;
    let pots = 0;

    while (command !== 'End') {
        let dishes = Number(command);
        if (days % 3 === 0) {
            detergentCol = detergentCol - dishes * 15;
            pots += dishes;
        } else {
            detergentCol = detergentCol - dishes * 5;
            plates += dishes;
        }
        if (detergentCol < 0) {
            break;
        }
        days++;
        command = input[index];
        index++;
    }

    if (detergentCol >= 0) {
        console.log('Detergent was enough!');
        console.log(`${plates} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${detergentCol} ml.`);
    } else {
        console.log(`Not enough detergent, ${Math.abs(detergentCol)} ml. more necessary!`);
    }

}

dishwasher(['1', '10', '15', '10', '12', '13', '30']);