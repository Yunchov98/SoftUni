function girlsParty(input) {

    let partyPrice = Number(input[0]);
    let messagesCount = Number(input[1]);
    let rosesCount = Number(input[2]);
    let keyHoldersCount = Number(input[3]);
    let caricatureCount = Number(input[4]);
    let luckySurpriseCount = Number(input[5]);

    let totalMessagesPrice = messagesCount * 0.60;
    let totalRosesPrice = rosesCount * 7.20;
    let totalKeyHoldersPrice = keyHoldersCount * 3.60;
    let totalCaricaturesPrice = caricatureCount * 18.20;
    let totalLuckySurprisePrice = luckySurpriseCount * 22.00;

    let totalPrice = totalMessagesPrice + totalRosesPrice + totalKeyHoldersPrice + totalCaricaturesPrice + totalLuckySurprisePrice;
    let totalCount = messagesCount + rosesCount + keyHoldersCount + caricatureCount + luckySurpriseCount;

    if (totalCount >= 25) {
        totalPrice *= 0.65;
    }

    let moneyForHosting = totalPrice * 0.10;

    let allMoney = totalPrice - moneyForHosting;

    if (allMoney >= partyPrice) {
        console.log(`Yes! ${(allMoney - partyPrice).toFixed(2)}`);
    } else {
        console.log(`Not enough money! ${(partyPrice - allMoney).toFixed(2)} lv needed`);
    }

}

girlsParty(['320', '8', '2', '5', '5', '1']);