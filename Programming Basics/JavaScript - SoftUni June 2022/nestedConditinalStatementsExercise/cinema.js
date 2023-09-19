function cinema(input) {

    let type = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let sum = 0;

    switch (type) {
        case 'Premiere': sum = rows * cols * 12.00; break;
        case 'Normal': sum = rows * cols * 7.50; break;
        case 'Discount': sum = rows * cols * 5.00; break;
    }

    console.log(`${sum.toFixed(2)} leva`);
}

cinema(["Premiere", "10", "12"]);
cinema(["Normal", "10", "12"]);
cinema(["Discount", "10", "12"]);
