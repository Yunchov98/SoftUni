function pcStore(input) {

    let cpuPrice = Number(input[0]);
    let videoCardPrice = Number(input[1]);
    let ramPrice = Number(input[2]);
    let ramCount = Number(input[3]);
    let discountPercent = Number(input[4]);

    let cpuPriceInLv = cpuPrice * 1.57;
    let videoCardPriceInLv = videoCardPrice * 1.57;
    let ramPriceInLv = ramPrice * 1.57;

    let totalRamPrice = ramPriceInLv * ramCount;
    let cpuPriceAfterDiscount = cpuPriceInLv - (cpuPriceInLv * discountPercent);
    let videoCardPriceAfterDiscount = videoCardPriceInLv - (videoCardPriceInLv * discountPercent);

    let totalPrice = totalRamPrice + cpuPriceAfterDiscount + videoCardPriceAfterDiscount;

    console.log(`Money needed - ${totalPrice.toFixed(2)} leva.`);

}

pcStore(["200",
    "100",
    "80",
    "1",
    "0.01"])


