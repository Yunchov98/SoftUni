function searchForANumber(mainArray, commands) {

    let elementsToTake = commands[0];
    let elementsToDelete = commands[1];
    let specialNumber = commands[2];

    let result = mainArray.splice(0, elementsToTake);
    result.splice(0, elementsToDelete);

    let counter = 0;

    for (let i = 0; i < result.length; i++) {
        if (result[i] === specialNumber) {
            counter++;
        }
    }

    console.log(`Number ${specialNumber} occurs ${counter} times.`);

}

searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
);