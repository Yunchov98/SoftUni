function spiceMustFlow(startingYield) {

    let day = 0;
    let totalAmount = 0;
    let workresResources = 26;

    while (startingYield >= 100) {
        day++;
        totalAmount += startingYield - workresResources;
        startingYield -= 10;
    }

    if (totalAmount > 0) {
        console.log(day);
        console.log(totalAmount - workresResources);
    } else {
        console.log(day);
        console.log(totalAmount);
    }

}

spiceMustFlow(10);