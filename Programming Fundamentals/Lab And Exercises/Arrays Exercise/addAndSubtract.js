function addAndSubtract(numbers) {

    let oldArrSum = 0;
    let newArrSum = 0;
    let myArr = [];

    for (let k = 0; k < numbers.length; k++) {
        oldArrSum += numbers[k];
    }

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            numbers[i] += i;
        } else {
            numbers[i] -= i;
        }
        myArr.push(numbers[i]);
        newArrSum += numbers[i];
    }

    console.log(`[ ${myArr.join(', ')} ]`);
    console.log(oldArrSum);
    console.log(newArrSum);

}

addAndSubtract([5, 15, 23, 56, 35]);