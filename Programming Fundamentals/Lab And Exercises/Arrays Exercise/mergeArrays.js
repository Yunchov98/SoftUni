function mergeArrays(firstArray, secondArray) {

    let myArr = [];

    for (let i = 0; i < firstArray.length; i++) {
        if (i % 2 === 0) {
            myArr.push(Number(firstArray[i]) + Number(secondArray[i]));
        } else {
            myArr.push(firstArray[i] + secondArray[i]);
        }
    }

    console.log(myArr.join(' - '));

}

mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);