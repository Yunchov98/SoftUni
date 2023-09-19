function happyCatParking(input) {

    let daysCount = Number(input[0]);
    let hours = Number(input[1]);

    let currentSum = 0;
    let sum = 0;

    for (let i = 1; i <= daysCount; i++) {
        for (let h = 1; h <= hours; h++) {
            if (i % 2 === 0 && h % 2 !== 0) {
                sum += 2.50;
                currentSum += 2.50;
            } else if (i % 2 !== 0 && h % 2 === 0) {
                sum += 1.25;
                currentSum += 1.25;
            } else {
                sum += 1;
                currentSum += 1
            }
        }
        console.log(`Day: ${i} - ${currentSum.toFixed(2)} leva`);
        currentSum = 0;
    }

    console.log(`Total: ${sum.toFixed(2)} leva`);

}

happyCatParking(['2', '5']);