function darts(input) {

    let index = 0;

    let name = input[index];
    index++;
    let command = input[index];
    index++;

    let shotsCounter = 0;
    let unsuccessfulCounter = 0;
    let totalPoints = 301;

    while (command !== 'Retire') {
        let field = command;
        let points = Number(input[index]);
        index++;
        shotsCounter++;

        switch (field) {
            case 'Double':
                points *= 2;
                break;
            case 'Triple':
                points *= 3;
                break;
        }

        if(points < totalPoints){
            totalPoints -= points;
        }

        if (totalPoints < points) { 
            unsuccessfulCounter++;
            totalPoints += points;
            command = input[index];
            index++;
            continue;
        }

        if (totalPoints === 0) {
            console.log(`${name} won the leg with ${shotsCounter} shots.`);
            break;
        }

        command = input[index];
        index++;

    }

    if (command === 'Retire') {
        console.log(`${name} retired after ${unsuccessfulCounter} unsuccessful shots.`);
    }

}

darts(["Stephen Bunting",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"7",
"Single",
"12",
"Double",
"1",
"Single",
"1"])
;