function extractIncreasingSubsequenceFromArray(array) {
    let biggestNumber = array[0];
    const myArr = [];

    for (const num of array) {
        if (num >= biggestNumber) {
            myArr.push(num);
            biggestNumber = num;
        }
    }

    return myArr;
}

extractIncreasingSubsequenceFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);