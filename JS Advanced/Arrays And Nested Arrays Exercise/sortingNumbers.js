function sortingNumbers(array) {
    array.sort((a, b) => a - b);
    const myArr = [];

    while (array.length !== 0) {
        myArr.push(array.shift());
        myArr.push(array.pop());
    }

    return myArr;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));