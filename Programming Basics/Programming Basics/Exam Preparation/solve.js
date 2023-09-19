function solve(input) {

    let index = 0;

    let peopleCount = Number(input[index]);
    index++;

    let price = 0;
    let itemCounter = 0;
    let totalPrice = 0;

    for (let i = 0; i < peopleCount; i++) {
        let command = input[index];
        index++;
        while (command !== 'Finish') {
            let type = command;
            switch (type) {
                case 'basket':
                    price += 1.50;
                    itemCounter++;
                    break;
                case 'wreath':
                    price += 3.80;
                    itemCounter++;
                    break;
                case 'chocolate bunny':
                    price += 7;
                    itemCounter++;
                    break;
            }
            command = input[index];
            index++;
        }
        if (itemCounter % 2 === 0) {
            price *= 0.80;
        }
        if (command === 'Finish') {
            console.log(`You purchased ${itemCounter} items for ${price.toFixed(2)} leva.`);
        }
        totalPrice += price;
        price = 0;
        itemCounter = 0;
    }

    let avgPrice = totalPrice / peopleCount;

    console.log(`Average bill per client is: ${avgPrice.toFixed(2)} leva.`);

}

solve(["2",
    "basket",
    "wreath",
    "chocolate bunny",
    "Finish",
    "wreath",
    "chocolate bunny",
    "Finish"])
    ;