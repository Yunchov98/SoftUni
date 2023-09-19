function mathOperations(a, b, operator) {
    const opertaors = {
        '+': () => a + b,
        '-': () => a - b,
        '*': () => a * b,
        '/': () => a / b,
        '%': () => a % b,
        '**': () => a ** b,
    }

    console.log(opertaors[operator](a, b));
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');