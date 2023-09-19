function equalSumsEvenOddPosition(input) {

    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);

    let printLine = '';

    for (let i = firstNumber; i <= secondNumber; i++) {
        let currentNum = '' + i;
        let evenSum = 0;
        let oddSum = 0;
        for (let x = 0; x < currentNum.length; x++) {
            let currentDigit = Number(currentNum.charAt(x));
            if (x % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (evenSum === oddSum) {
            printLine += `${i} `;
        }
    }

    console.log(printLine);

}

equalSumsEvenOddPosition(["100000",
    "100050"])
    ;