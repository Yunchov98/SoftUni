function sameNumbers(number) {
    const numberAsString = String(number);
    const firstElement = numberAsString[0];
    let isSame = true;
    let sum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        if (numberAsString[i] !== firstElement) {
            isSame = false;
        }

        sum += Number(numberAsString[i]);
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);