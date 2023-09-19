function birthdayParty(arg1) {

    let rentForTheHall = Number(arg1);

    let cakePrice = rentForTheHall * 0.20;
    let drinksPrice = cakePrice * 0.55;
    let animator = rentForTheHall / 3;

    let budgetNeeded = rentForTheHall + cakePrice + drinksPrice + animator;

    console.log(budgetNeeded)

}

birthdayParty(2250)