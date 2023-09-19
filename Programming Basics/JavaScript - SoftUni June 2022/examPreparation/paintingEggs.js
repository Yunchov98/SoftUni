function paintingEggs(input) {

    let size = input[0];
    let color = input[1];
    let count = Number(input[2]);

    let price = 0;

    switch (color) {
        case 'Red':
            if (size === 'Large') {
                price = 16.00;
            } else if (size === 'Medium') {
                price = 13.00;
            } else if (size === 'Small') {
                price = 9.00;
            }
            break;
        case 'Green':
            if (size === 'Large') {
                price = 12.00;
            } else if (size === 'Medium') {
                price = 9.00;
            } else if (size === 'Small') {
                price = 8.00;
            }
            break;
        case 'Yellow':
            if (size === 'Large') {
                price = 9.00;
            } else if (size === 'Medium') {
                price = 7.00;
            } else if (size === 'Small') {
                price = 5.00;
            }
            break;
    }

    let totalPrice = price * count;
    let expenses = totalPrice * 0.35;

    let finalPrice = totalPrice - expenses;

    console.log(`${finalPrice.toFixed(2)} leva.`);

}

paintingEggs(["Large",
    "Red",
    "7"])
    ;