function substitute(input) {

    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let thirdNumber = Number(input[2]);
    let forthNumber = Number(input[3]);

    let currentCombination = 0;

    for (let k = firstNumber; k <= 8; k++) {
        for (let l = 9; l >= secondNumber; l--) {
            for (let m = thirdNumber; m <= 8; m++) {
                for (let n = 9; n >= forthNumber; n--) {
                    if (k === m && l === n && k % 2 === 0 && l % 2 !== 0) {
                        console.log('Cannot change the same player.');
                    } else if (k % 2 === 0 && l % 2 !== 0 && m % 2 === 0 && n % 2 !== 0) {
                        console.log(`${k}${l} - ${m}${n}`);
                        currentCombination++;
                    }
                    if (currentCombination === 6) {
                        break;
                    }
                }
                if (currentCombination === 6) {
                    break;
                }
            }
            if (currentCombination === 6) {
                break;
            }
        }
        if (currentCombination === 6) {
            break;
        }
    }

}

substitute(["6",
"7",
"5",
"6"])

