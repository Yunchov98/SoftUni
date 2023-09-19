function maidenParty(input) {

    let partyPrice = Number(input[0]);
    let messagesCount = Number(input[1]);
    let rosesCount = Number(input[2]);
    let keyHoldersCount = Number(input[3]);
    let caricaturesCount = Number(input[4]);
    let luckySurpriseCount = Number(input[5]);

    let totalMessagesPrice = messagesCount * 0.60;
    let totalRosesPrice = rosesCount * 7.20;
    let totalKeyHoldersPrice = keyHoldersCount * 3.60;
    let totalCaricaturesPrice = caricaturesCount * 18.20;
    let totalLuckySurprisePrice = luckySurpriseCount * 22.00;

    let totalPrice = totalMessagesPrice + totalRosesPrice + totalKeyHoldersPrice + totalCaricaturesPrice + totalLuckySurprisePrice;
    let totalCount = messagesCount + rosesCount + keyHoldersCount + caricaturesCount + luckySurpriseCount;

    if (totalCount >= 25) {
        totalPrice *= 0.65;
    }

    let moneyAfterHosting = totalPrice * 0.90;

    if (moneyAfterHosting >= partyPrice) {
        console.log(`Yes! ${(moneyAfterHosting - partyPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(partyPrice - moneyAfterHosting).toFixed(2)} lv needed.`);
    }

}

maidenParty(["320",
    "8",
    "2",
    "5",
    "5",
    "1"])


