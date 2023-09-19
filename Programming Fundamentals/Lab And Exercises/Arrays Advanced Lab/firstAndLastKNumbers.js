function firstAndLastKNumbers(arrayOfNumbers) {

    let count = arrayOfNumbers.shift();

    let firstElements = arrayOfNumbers.slice(0, count);
    let lastElements = arrayOfNumbers.slice(arrayOfNumbers.length - count);

    console.log(firstElements.join(' '));
    console.log(lastElements.join(' '));

}

firstAndLastKNumbers([2, 7, 8, 9]);