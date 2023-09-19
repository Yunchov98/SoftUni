function aggregateElements(array) {
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    const sumOfInverseValues = array.reduce((acc, curr) => acc + 1 / curr, 0);
    const concatElements = array.join('');

    console.log(sum);
    console.log(sumOfInverseValues);
    console.log(concatElements);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);