function sumOfTwoNumbers(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magic = Number(input[2]);
    let isFinsih = false;

    let counter = 0;
    for (let i = start; i <= end; i++) {
        for (let y = start; y <= end; y++) {
            let result = i + y;
            counter++;
            if (result === magic) {
                console.log(`Combination N:${counter} (${i} + ${y} = ${magic})`);
                isFinsih = true;
                break;
            }
        }
        if (isFinsih) {
            break;
        }
    }

    if (!isFinsih) {
        console.log(`${counter} combinations - neither equals ${magic}`);
    }

}

sumOfTwoNumbers(['1', '10', '5']);