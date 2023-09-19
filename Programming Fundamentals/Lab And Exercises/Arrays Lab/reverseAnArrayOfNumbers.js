function reverseAnArrayOfNumbers(number, numbers) {

    let myArr = [];

    for (let i = number - 1; i >= 0; i--) {
        myArr.push(numbers[i]);
    }

    let buff = '';

    for (let i = 0; i < myArr.length; i++) {
        if (i === myArr.length - 1) {
            buff += `${myArr[i]}`;
        } else {
            buff += `${myArr[i]} `;
        }
    }

    console.log(buff);

}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);