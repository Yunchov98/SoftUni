function vacation(input) {

    let budget = Number(input[0]);
    let season = input[1];

    if (budget <= 1000) {
        if (season === 'Summer') {
            budget = budget * 0.65;
            console.log(`Alaska - Camp - ${budget.toFixed(2)}`);
        } else {
            budget = budget * 0.45;
            console.log(`Morocco - Camp - ${budget.toFixed(2)}`);
        }
    } else if (budget > 1000 && budget <= 3000) {
        if (season === 'Summer') {
            budget = budget * 0.80;
            console.log(`Alaska - Hut - ${budget.toFixed(2)}`);
        } else {
            budget = budget * 0.60;
            console.log(`Morocco - Hut - ${budget.toFixed(2)}`);
        }
    } else {
        budget = budget * 0.90;
        if (season === 'Summer') {
            console.log(`Alaska - Hotel - ${budget.toFixed(2)}`);
        } else {
            console.log(`Morocco - Hotel - ${budget.toFixed(2)}`);
        }
    }

}

vacation(['799.50', 'Winter']);