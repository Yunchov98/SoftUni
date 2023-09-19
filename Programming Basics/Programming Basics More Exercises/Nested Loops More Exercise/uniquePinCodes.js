function uniquePinCodes(input) {

    let firstNumMax = Number(input[0]);
    let secondNumMax = Number(input[1]);
    let thirdNumMax = Number(input[2]);

    for (let i = 2; i <= firstNumMax; i+=2) {
        for (let x = 2; x <= secondNumMax; x++) {
            for (let y = 2; y <= thirdNumMax; y+=2) {
                if (x === 2 || x === 3 || x === 5 || x === 7) {
                    console.log(`${i} ${x} ${y}`);
                }
            }
        }
    }

}

uniquePinCodes(['3', '5', '5']);