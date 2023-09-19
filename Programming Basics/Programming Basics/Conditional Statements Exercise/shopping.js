function shopping(input) {

    let budget = Number(input[0]);
    let videoCardsCount = Number(input[1]);
    let cpusCount = Number(input[2]);
    let ramMemoriesCount = Number(input[3]);

    let videoCardsPrice = videoCardsCount * 250;
    let cpuPrice = videoCardsPrice * 0.35;
    let ramMemoryPrice = videoCardsPrice * 0.10;

    let allCpuPrice = cpuPrice * cpusCount;
    let allRamMemoriesPrice = ramMemoriesCount * ramMemoryPrice;

    let total = videoCardsPrice + allCpuPrice + allRamMemoriesPrice;

    if (videoCardsCount > cpusCount) {
        total = total - (total * 15 / 100);
    }



    if (budget >= total) {
        let diff = budget - total;
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    } else {
        let moneyNeeded = Math.abs(total - budget);
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`)
    }

}

shopping(['900', '2', '1', '3']);