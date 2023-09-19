function profit(input) {

    let coinsCount1 = Number(input[0]);
    let coinsCount2 = Number(input[1]);
    let coinsCount5 = Number(input[2]);
    let sum = Number(input[3]);

    for (let i = 0; i <= coinsCount1; i++) {
        for (let x = 0; x <= coinsCount2; x++) {
            for (let y = 0; y <= coinsCount5; y++) {
                if (i * 1 + x * 2 + y * 5 === sum) {
                    console.log(`${i} * 1 lv. + ${x} * 2 lv. + ${y} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }

}
profit(['3', '2', '3', '10']);