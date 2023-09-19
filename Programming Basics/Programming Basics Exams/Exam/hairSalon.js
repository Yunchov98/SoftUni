function hairSalon(input) {

    let index = 0;

    let target = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let price = 0;
    let isFinish = false;

    while (command !== 'closed') {
        let type = command;
        let thing = input[index];
        index++;

        switch (type) {
            case 'haircut':
                if (thing === 'mens') {
                    price += 15.00;
                } else if (thing === 'ladies') {
                    price += 20.00;
                } else if (thing === 'kids') {
                    price += 10.00
                }
                break;
            case 'color':
                if (thing === 'touch up') {
                    price += 20.00;
                } else if (thing === 'full color') {
                    price += 30.00;
                }
                break;
        }

        if (price >= target) {
            isFinish = true;
            console.log('You have reached your target for the day!');
            break;
        }

        command = input[index];
        index++;
    }

    if (!isFinish) {
        console.log(`Target not reached! You need ${target - price}lv. more.`);
    }

    console.log(`Earned money: ${price}lv.`);

}

hairSalon(["50",
    "color",
    "full color",
    "haircut",
    "ladies"])
