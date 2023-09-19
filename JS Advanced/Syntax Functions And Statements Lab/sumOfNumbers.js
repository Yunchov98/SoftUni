function sumOfNumbers(x, y) {
    const firstNumber = Number(x);
    const secondNumber = Number(y);
    let sum = 0;

    for (let i = firstNumber; i <= secondNumber; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumOfNumbers('1', '5'));
console.log(sumOfNumbers('-8', '20'));