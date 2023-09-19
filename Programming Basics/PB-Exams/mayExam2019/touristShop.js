function touristShop(input) {

    let index = 0;

    let budget = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let productCounter = 1;
    let totalPrice = 0;
    let flag = false;

    while (command !== 'Stop') {
        let product = command;
        let price = Number(input[index]);
        index++;

        if (productCounter % 3 === 0) {
            price /= 2;
        }
        if (price > budget) {
            flag = true;
            console.log("You don't have enough money!");
            console.log(`You need ${(price - budget).toFixed(2)} leva!`);
            break;
        }
        budget -= price;
        productCounter++;
        totalPrice += price;
        command = input[index];
        index++;
    }

    if (command === 'Stop') {
        console.log(`You bought ${productCounter - 1} products for ${totalPrice.toFixed(2)} leva.`);
    }
    
}

touristShop(["153.20",
    "Backpack",
    "25.20",
    "Shoes",
    "54",
    "Sunglasses",
    "30",
    "Stop"])
