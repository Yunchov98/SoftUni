function reportSystem(input) {

    let index = 0;

    let sum = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let paymentMethod = 1;
    let moneyInCash = 0;
    let moneyWithCard = 0;
    let moneyInCashCounter = 0;
    let moneyWithCardCounter = 0;

    while (command !== 'End') {
        let price = Number(command);
        if (paymentMethod % 2 !== 0) {
            if (price > 100) {
                console.log('Error in transaction!');
            } else {
                console.log('Product sold!');
                moneyInCash += price;
                moneyInCashCounter++;
            }
        } else {
            if (price < 10) {
                console.log('Error in transaction!');
            } else {
                console.log(`Product sold!`);
                moneyWithCard += price;
                moneyWithCardCounter++;
            }
        }
        paymentMethod++;
        if ((moneyInCash + moneyWithCard) >= sum) {
            break;
        }
        command = input[index];
        index++;
    }

    let totalSum = moneyInCash + moneyWithCard;
    let avgCashMoney = moneyInCash / moneyInCashCounter;
    let avgCashWithCard = moneyWithCard / moneyWithCardCounter;

    if (totalSum >= sum) {
        console.log(`Average CS: ${avgCashMoney.toFixed(2)}`);
        console.log(`Average CC: ${avgCashWithCard.toFixed(2)}`);
    } else {
        console.log('Failed to collect required money for charity.');
    }

}

reportSystem(['600', '86', '150', '98', '227', 'End',]);