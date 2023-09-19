function braceletStand(input){

    let teresaMoney = Number(input[0]);
    let winingMoney = Number(input[1]);
    let expenses = Number(input[2]);
    let giftPrice = Number(input[3]);

    let savedMoney = teresaMoney * 5;
    let totalWiningMoney = winingMoney * 5;
    let totalSavedMoney = savedMoney + totalWiningMoney;
    let moneyAfterExpenses = totalSavedMoney - expenses;

    if(moneyAfterExpenses >= giftPrice){
        console.log(`Profit: ${moneyAfterExpenses.toFixed(2)} BGN, the gift has been purchased.`);
    }else{
        console.log(`Insufficient money: ${(giftPrice - moneyAfterExpenses).toFixed(2)} BGN.`);
    }

}

braceletStand(["15.20",
"200.00",
"7.30",
"1500.12"]);