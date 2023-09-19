function sumOfTwoNumbers(input) {

    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
    let magicNumber = Number(input[2]);

    let isFound = false;
    let counter = 0;

    for (let i = startInterval; i <= endInterval; i++) {
        for (let x = startInterval; x <= endInterval; x++) {
            let result = i + x;
            counter++;
            if (result === magicNumber) {
                console.log(`Combination N:${counter} (${i} + ${x} = ${magicNumber})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }

    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }

}

sumOfTwoNumbers(['1', '10', '5']);