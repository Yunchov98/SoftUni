function bitcoinMining(input) {

    let boughtBitcoin = 0;
    let days = 0;
    let totalMoney = 0;
    let firstDay = 0;

    for (let i = 0; i < input.length; i++) {
        days++;
        let currentGold = input[i];
        if (days % 3 === 0) {
            totalMoney += (currentGold - currentGold * 0.3) * 67.51;
        } else {
            totalMoney += currentGold * 67.51;
        }
        while (totalMoney >= 11949.16) {
            if (firstDay === 0) {
                firstDay = days;
            }
            totalMoney -= 11949.16;
            boughtBitcoin++;
        }
    }

    console.log(`Bought bitcoins: ${boughtBitcoin}`);
    if (boughtBitcoin >= 1) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoinMining([3124.15, 504.212, 2511.124])