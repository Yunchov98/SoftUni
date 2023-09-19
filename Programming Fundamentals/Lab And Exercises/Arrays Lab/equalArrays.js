function equalArrays(firstArray, secondArray) {

    let sum = 0;
    let isEqual = false;

    for (let i = 0; i < firstArray.length; i++) {
        if (secondArray.includes(firstArray[i])) {
            let currentNumber = Number(firstArray[i]);
            sum += currentNumber;
            isEqual = true;
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isEqual = false;
            break;
        }
    }

    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}

equalArrays(['10', '20', '30'], ['10', '20', '30']);