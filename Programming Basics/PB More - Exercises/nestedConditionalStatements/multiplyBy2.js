function multiplyBy2(input) {
    let command = Number(input.shift());
    let sum = 0;
    while (true) {
        if (command < 0) {
            console.log("Negative number!");
            break;
        }
        sum = command * 2;
        console.log(`Result: ${sum.toFixed(2)}`);
        command = input.shift();
    }
}

multiplyBy2(['12', '43.2144', '12.3', '543.23', '-20']);