function smallestTwoNumbers(arrayOfNumbers) {

    let sortedArray = arrayOfNumbers.sort((a, b) => a - b)
                                    .slice(0, 2)
                                    .join(' ');

    console.log(sortedArray);

}

smallestTwoNumbers([30, 15, 50, 5]);