function maxSequenceOfEqualElements(array) {

    let arrayL = array.length;
    let myArr = [];

    for (let i = 0; i < arrayL; i++) {
        let currentSequence = [];
        for (let k = i; k < arrayL; k++) {
            if (array[i] === array[k]) {
                currentSequence.push(array[i]);
            } else {
                break;
            }
        }
        if (currentSequence.length > myArr.length) {
            myArr = currentSequence;
        }
    }

    console.log(myArr.join(' '));

}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);