function amazingNumbers(number) {

    let numberAsString = number.toString();
    let sum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        let currentNumber = Number(numberAsString[i]);
        sum += currentNumber;
    }

    let result = sum.toString().includes('9');

    console.log(result ? `${number} Amazing? True` : `${number} Amazing? False`);

    // if(sum.toString().includes('9')){
    //     console.log(`${number} Amazing? True`);
    // }else{
    //     console.log(`${number} Amazing? False`);
    // }

}

amazingNumbers(5671);