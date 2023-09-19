function flowers(input) {

    let boughtChrysanthemumsCount = Number(input[0]);
    let boughtRosesCount = Number(input[1]);
    let boughtTulipsCount = Number(input[2]);
    let season = input[3];
    isFeast = input[4];

    let chrysanthemumsPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;

    switch (season) {
        case 'Spring':
        case 'Summer':
            chrysanthemumsPrice = 2.00;
            rosesPrice = 4.10;
            tulipsPrice = 2.50;
            break;
        case 'Autumn':
        case 'Winter':
            chrysanthemumsPrice = 3.75;
            rosesPrice = 4.50;
            tulipsPrice = 4.15;
            break;
    }

    if (isFeast === 'Y') {
        chrysanthemumsPrice = chrysanthemumsPrice * 1.15;
        rosesPrice = rosesPrice * 1.15;
        tulipsPrice = tulipsPrice * 1.15;
    }

    let totalChrysanthemumsPrice = chrysanthemumsPrice * boughtChrysanthemumsCount;
    let totalRosesPrice = rosesPrice * boughtRosesCount;
    let totalTulipsPrice = tulipsPrice * boughtTulipsCount;
    let bouquetPrice = totalChrysanthemumsPrice + totalRosesPrice + totalTulipsPrice;

    if (boughtTulipsCount > 7 && season === 'Spring') {
        bouquetPrice = bouquetPrice * 0.95;
    } else if (boughtRosesCount >= 10 && season === 'Winter') {
        bouquetPrice = bouquetPrice * 0.90;
    }

    if ((boughtChrysanthemumsCount + boughtRosesCount + boughtTulipsCount) > 20) {
        bouquetPrice = bouquetPrice * 0.80;
    }

    let totalBouquetPrice = bouquetPrice + 2;

    console.log(totalBouquetPrice.toFixed(2));

}

flowers(['2', '4', '8', 'Spring', 'Y']);