function sumEvenNumbers(array) {

    let myArr = [];

    for (let el of array) {
        myArr.push(el);
    }

    let sum = 0;

    for (let i = 0; i < myArr.length; i++) {
        let currentNumber = Number(myArr[i]);

        if (currentNumber % 2 === 0) {
            sum += currentNumber;
        }
    }

    console.log(sum);

}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);