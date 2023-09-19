function shootForTheWin(array) {

    let targets = array.shift().split(' ').map(Number);

    let shotsCount = 0;

    while (array[0] !== 'End') {

        let index = Number(array.shift());
        let element = Number(targets[index]);

        if (targets[index] !== -1 && index < targets.length && index >= 0) {
            targets[index] = -1;
            shotsCount++;

            for (let i = 0; i < targets.length; i++) {
                if (targets[i] > element && targets[i] !== -1) {
                    targets[i] -= element;
                } else if (targets[i] <= element && targets[i] !== -1) {
                    targets[i] += element;
                }
            }
        }
    }
    console.log(`Shot targets: ${shotsCount} -> ${targets.join(' ')}`);
}

shootForTheWin((["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])
);