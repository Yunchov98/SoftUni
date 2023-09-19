function accountBalance(input) {

    let index = 0;

    let text = input[index];
    let totalSum = 0;

    while (text !== 'NoMoreMoney') {
        let currentSum = Number(text);
        if (currentSum < 0) {
            console.log('Invalid operation!');
            break;
        }
        totalSum += currentSum;
        index++;
        text = input[index];
        console.log(`Increase: ${currentSum.toFixed(2)}`);
    }

    if (totalSum >= 0) {
        console.log(`Total: ${totalSum.toFixed(2)}`);
    }

}

accountBalance(["120",
    "45.55",
    "-150"])

    ;