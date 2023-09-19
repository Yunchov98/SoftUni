function numbersDivisibleBy9(input) {

    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);

    let sum = 0;
    let outputNumbers = '';

    for (let i = firstNumber; i <= secondNumber; i++) {
        if (i % 9 === 0) {
            sum += i;
            outputNumbers += `${i}\n` // \n отпечатва числата всяко на нов ред 
        }
    }
    
    console.log(`The sum: ${sum}`);
    console.log(outputNumbers);
}

numbersDivisibleBy9(['100', '200']);