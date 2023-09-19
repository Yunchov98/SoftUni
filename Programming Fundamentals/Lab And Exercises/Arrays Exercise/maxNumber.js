function maxNumber(array) {

    let maxNumber = 0;
    let myArr = [];

    for (let i = 0; i < array.length; i++) {
        let firstNumber = array[i];
        let isBigger = true;
        for (let r = i + 1; r <= array.length; r++) {
            let nextNumber = array[r];
            if (firstNumber <= nextNumber) {
                isBigger = false;
            } else {
                maxNumber = firstNumber;
            }
        }
        if (isBigger) {
            myArr.push(maxNumber);
        }
    }

    console.log(myArr.join(' '));

}

maxNumber([27, 19, 42, 2, 13, 45, 48]);