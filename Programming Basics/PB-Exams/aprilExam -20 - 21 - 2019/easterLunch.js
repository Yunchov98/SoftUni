function easterLunch(input) {

    let easterBreadCount = Number(input[0]);
    let boxOfEggsCount = Number(input[1]);
    let kiloOfCookies = Number(input[2]);

    let easterBreadPrice = easterBreadCount * 3.20;
    let eggsPrice = boxOfEggsCount * 4.35;
    let cookiesPrice = kiloOfCookies * 5.40;
    let paintForEggs = boxOfEggsCount * 12 * 0.15;

    let total = easterBreadPrice + eggsPrice + cookiesPrice + paintForEggs;

    console.log(total.toFixed(2));
}

easterLunch(['3', '2', '3']);