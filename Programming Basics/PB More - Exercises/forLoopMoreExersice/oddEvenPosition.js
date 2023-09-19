function oddEvenPosition(input) {

    let index = 0;

    let numbers = Number(input[index]);
    index++;

    let oddSum = 0;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let evenSum = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= numbers; i++) {
        let currentNumber = Number(input[index]);
        index++;

        if (i % 2 !== 0) {
            oddSum += currentNumber;
        } else {
            evenSum += currentNumber;
        }

        if (i % 2 !== 0) {
            if (currentNumber < oddMin) {
                oddMin = currentNumber;
            }
        } else {
            evenMin = currentNumber;
        }

        if (i % 2 !== 0) {
            if (currentNumber > oddMax) {
                oddMax = currentNumber;
            }
        } else {
            evenMax = currentNumber;
        }
    }

    console.log(`OddSum=${oddSum.toFixed(2)},`);
    if (oddSum === 0) {
        console.log(`OddMin=No,`);
        console.log(`OddMax=No,`);
    } else {
        console.log(`OddMin=${oddMin.toFixed(2)},`);
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    if (evenSum === 0) {
        console.log(`EvenMin=No,`);
        console.log(`EvenMax=No`);
    } else {
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }

}


oddEvenPosition(['1', '-5']);