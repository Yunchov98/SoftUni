function sorting(array) {

    let result = [];
    let sortedArray = array.sort((a, b) => a - b)

    while (sortedArray.length !== 0) {
        result.push(sortedArray.pop());
        result.push(sortedArray.shift());
    }

    console.log(result.join(' '));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);