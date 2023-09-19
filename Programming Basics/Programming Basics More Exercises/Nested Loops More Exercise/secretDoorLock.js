function secretDoorLock(input) {

    let firstInterval = Number(input[0]);
    let secondInterval = Number(input[1]);
    let thirdInterval = Number(input[2]);

    for (let x = 2; x <= firstInterval; x += 2) {
        for (let y = 2; y <= secondInterval; y++) {
            for (let z = 2; z <= thirdInterval; z += 2) {
                if (y === 2 || y === 3 || y === 5 || y === 7) {
                    console.log(`${x} ${y} ${z}`);
                }
            }
        }
    }

}

secretDoorLock(['3', '5', '5']);