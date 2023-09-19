function carNumber(input) {

    let firstNum = Number(input[0]);
    let lastNum = Number(input[1]);

    let buff = '';

    for (let i = firstNum; i <= lastNum; i++) {
        for (let x = firstNum; x <= lastNum; x++) {
            for (let y = firstNum; y <= lastNum; y++) {
                for (let z = firstNum; z <= lastNum; z++) {
                    if (i % 2 === 0 && z % 2 !== 0 || i % 2 !== 0 && z % 2 === 0) {
                        if (i > z) {
                            if ((x + y) % 2 === 0) {
                                buff += `${i}${x}${y}${z} `;
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(buff);

}

carNumber(['3', '5']);