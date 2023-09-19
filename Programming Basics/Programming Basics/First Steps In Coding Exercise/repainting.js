function repainting(input) {

    let requiredAmountOfNylon = Number(input[0]);
    let requiredAmountOfPaint = Number(input[1]);
    let amountOfThinner = Number(input[2]);
    let hours = Number(input[3]);
    
    let nylonPrice = (requiredAmountOfNylon + 2) * 1.50;
    let paintPrice = (requiredAmountOfPaint + (requiredAmountOfPaint * 10 / 100)) * 14.50;
    let thinnerPrice = amountOfThinner * 5;

    let totalPrice = nylonPrice + paintPrice + thinnerPrice + 0.40;
    
    let workersPaymentForOneHour = totalPrice * 30 / 100;
    let totalPaymentForWorekrs = workersPaymentForOneHour * hours;

    let repairCosts = totalPrice + totalPaymentForWorekrs;
    console.log(repairCosts);
}

repainting(['5', '10', '10', '1']);