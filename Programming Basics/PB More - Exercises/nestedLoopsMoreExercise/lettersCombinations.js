function lettersCombinations(input) {

    let first = input[0].charCodeAt(0);
    let second = input[1].charCodeAt(0);
    let skiped = input[2];

    let counter = 0;
    let buff = ''

    for (let i = first; i <= second; i++) {
        for (let k = first; k <= second; k++) {
            for (let z = first; z <= second; z++) {
                let firstLetter = String.fromCharCode(i);
                let secondLetter = String.fromCharCode(k);
                let thirdLetter = String.fromCharCode(z);
                if (firstLetter !== skiped && secondLetter !== skiped && thirdLetter !== skiped) {
                    counter++;
                    buff += `${firstLetter}${secondLetter}${thirdLetter} `;
                }
            }
        }
    }

    console.log(`${buff}${counter}`);

}

lettersCombinations(['a', 'c', 'z']);