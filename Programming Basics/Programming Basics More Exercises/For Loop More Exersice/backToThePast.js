function backToThePast(input) {

    let money = Number(input[0]);
    let yearToLive = Number(input[1]);

    let spendMoney = 0;
    let currentYears = 18;

    for (let i = 1800; i <= yearToLive; i++) {
        if (i % 2 === 0) {
            spendMoney += 12000;
            currentYears++;
        } else {
            spendMoney += 12000 + 50 * currentYears;
            currentYears++;
        }
    }

    let diff = Math.abs(money - spendMoney);

    if (spendMoney <= money) {
        console.log(`Yes! He will live a carefree life and will have ${diff.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${diff.toFixed(2)} dollars to survive.`);
    }

}

backToThePast(['100000.15', '1808']);