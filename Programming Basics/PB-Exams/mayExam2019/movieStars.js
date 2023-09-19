function movieStars(input) {

    let index = 0;

    let budget = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    while (command !== 'ACTION') {
        let name = command;
        if (name.length > 15) {
            budget *= 0.80;
        } else {
            let reward = Number(input[index]);
            index++;
            budget -= reward;
        }
        if (budget < 0) {
            console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
            break;
        }
        command = input[index];
        index++;
    }

    if (command === 'ACTION') {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    }

}

movieStars(["170000", "Ben Affleck", "40000.50", "Zahari Baharov", "80000", "Tom Hanks", "2000.99", "ACTION"]);
