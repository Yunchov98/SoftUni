function cleverLily(input) {

    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let singeToyPrice = Number(input[2]);

    let money = 0;
    let moneyHave = 10;
    let toyCounter = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            money += moneyHave;
            moneyHave += 10;
            money--;
        } else {
            toyCounter++;
        }
    }

    let totalMoneyFromToys = toyCounter * singeToyPrice;
    money += totalMoneyFromToys;

    let diff = Math.abs(washingMachinePrice - money);

    if (money >= washingMachinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }

}

cleverLily(['10', '170', '6']);