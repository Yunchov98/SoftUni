function addBags(input) {

    let price = Number(input[0]);
    let baggageKilos = Number(input[1]);
    let days = Number(input[2]);
    let baggageCount = Number(input[3]);

    if (baggageKilos >= 10 && baggageKilos <= 20) {
        price *= 0.50;
    } else if (baggageKilos <= 10) {
        price *= 0.20;
    }

    if (days > 30) {
        price *= 1.10;
    } else if (days >= 7 && days <= 30) {
        price *= 1.15;
    } else  {
        price *= 1.40;
    }

    let totalPrice = price * baggageCount;

    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`);

}

addBags(["25.50", "5", "36", "6"]);