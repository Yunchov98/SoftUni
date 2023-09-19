function vacation(input) {

    let index = 0;

    let neededMoney = Number(input[index]);
    index++;
    let currenMoney = Number(input[index]);
    index++;

    let spendDayCounter = 0;
    let dayCounter = 0;

    while (currenMoney < neededMoney) {
        let action = input[index];
        index++;
        let amount = Number(input[index]);
        index++;
        dayCounter++;
        switch (action) {
            case 'spend':
                currenMoney -= amount;
                if (currenMoney < 0) {
                    currenMoney = 0;
                }
                spendDayCounter++;
                break;
            case 'save':
                currenMoney += amount;
                spendDayCounter = 0;
                break;
        }
        if (spendDayCounter >= 5) {
            break;
        }
    }

    if (spendDayCounter >= 5) {
        console.log("You can't save the money.");
        console.log(`${dayCounter}`);
    } else {
        console.log(`You saved the money for ${dayCounter} days.`);
    }

}

vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]); 