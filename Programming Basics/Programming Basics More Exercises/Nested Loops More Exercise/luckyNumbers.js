function luckyNumbers(input) {

    let n = Number(input[0]);

    let result = '';

    for (let i = 1; i <= 9; i++) {
        for (let x = 1; x <= 9; x++) {
            for (let y = 1; y <= 9; y++) {
                for (let z = 1; z <= 9; z++) {
                    if (i + x === y + z) {
                        if (n % (i + x) === 0) {
                            result += `${i}${x}${y}${z} `;
                        }
                    }
                }
            }
        }
    }

    console.log(result);

}

luckyNumbers(['7']);