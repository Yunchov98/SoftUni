function factorialDivision(firstNum, secondNum) {

    const factorial = (n) => {
        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    const result = (factorial(firstNum) / factorial(secondNum));

    console.log(result.toFixed(2));

}

factorialDivision(5, 2)