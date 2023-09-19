function gladiatorExpenses(lostFightsCount, helmetPrice, sowrdPrice, shieldPrice, armorPrice) {

    let totalExpenses = 0;
    let brokenShieldCount = 0;

    for (let currentFight = 1; currentFight <= lostFightsCount; currentFight++) {
        if (currentFight % 2 === 0) {
            totalExpenses += helmetPrice;
        }
        if (currentFight % 3 === 0) {
            totalExpenses += sowrdPrice;
        }
        if (currentFight % 2 === 0 && currentFight % 3 === 0) {
            totalExpenses += shieldPrice;
            brokenShieldCount++;
            if (brokenShieldCount % 2 === 0) {
                totalExpenses += armorPrice;
            }
        }
    }

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);

}

gladiatorExpenses(7, 2, 3, 4, 5);