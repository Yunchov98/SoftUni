function equalPairs(input) {

    let index = 0;
    let n = Number(input[index]);
    index++;

    let maxDiff = 0;
    let sumPrevNumbers = 0;
    let isDiff = false;

    for (let i = 0; i < n; i++) {
        let firstNum = Number(input[index]);
        index++;
        let secondNum = Number(input[index]);
        index++;
        let sum = firstNum + secondNum;
        if (sum !== sumPrevNumbers && i !== 0) {
            isDiff = true;
            let diff = Math.abs(sum - sumPrevNumbers);
            if (diff > maxDiff) {
                maxDiff = diff;
            }
        }
        sumPrevNumbers = sum;
    }

    if (isDiff) {
        console.log(`No, maxdiff=${maxDiff}`);
    } else {
        console.log(`Yes, value=${sumPrevNumbers}`);
    }

}

equalPairs(['3', '1', '2', '0', '3', '4', '-1']);