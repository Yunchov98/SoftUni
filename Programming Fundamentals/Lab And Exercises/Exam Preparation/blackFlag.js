function blackFlag(array) {

    let daysOfPlunder = Number(array[0]);
    let dailyPlunder = Number(array[1]);
    let expectedPlunder = Number(array[2]);

    let totalPlunder = 0;

    for (let i = 1; i <= daysOfPlunder; i++) {
        totalPlunder += dailyPlunder;
        if (i % 3 === 0 && i !== 0) {
            totalPlunder += dailyPlunder * 0.5;
        }

        if (i % 5 === 0 && i !== 0) {
            totalPlunder *= 0.70;
        }
    }

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentageLeft = totalPlunder / expectedPlunder * 100;
        console.log(`Collected only ${percentageLeft.toFixed(2)}% of the plunder.`);
    }
}

blackFlag((["10",
    "20",
    "380"])
);