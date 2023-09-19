function processOddNumbers(arrayOfNumbers) {

    let result = arrayOfNumbers.filter((x, i) => i % 2 !== 0)
                               .map(x => x * 2)
                               .reverse()
                               .join(' ');

    console.log(result);               

}

processOddNumbers([10, 15, 20, 25]);