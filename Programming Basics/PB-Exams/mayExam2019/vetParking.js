function vetParking(input) {

    let index = 0;

    let daysCount = Number(input[index]);
    index++;
    let hours = Number(input[index]);
    index++;

    let tax = 0;
    let totalSum = 0;

    for (let i = 1; i <= daysCount; i++) {
        for (let h = 1; h <= hours; h++) {
            if (i % 2 === 0 && h % 2 !== 0) {
                tax += 2.50;
            } else if (i % 2 !== 0 && h % 2 === 0) {
                tax += 1.25;
            } else {
                tax += 1.00;
            }
        }
        totalSum += tax;
        console.log(`Day: ${i} - ${tax.toFixed(2)} leva`);
        tax = 0;
    }

    console.log(`Total: ${totalSum.toFixed(2)} leva`);

}

vetParking(['5', '2']);