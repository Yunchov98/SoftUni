function movingTarget(array) {

    let targets = array.shift().split(' ').map(Number);
    let line = array.shift();

    while (line !== 'End') {

        let [command, index, value] = line.split(' ');
        index = Number(index);
        value = Number(value);

        switch (command) {
            case 'Shoot':
                if (index >= 0 && targets.length >= index) {
                    targets[index] -= value;
                    if (targets[index] <= 0) {
                        targets.splice(index, 1);
                    }
                }
                break;
            case 'Add':
                if (index >= 0 && targets.length > index) {
                    targets.splice(index, 0, value);
                } else {
                    console.log('Invalid placement!');
                }
                break;
            case 'Strike':
                const radiusRange = 1 + (value * 2);
                const radiusStart = index - value;
                const radiusEnd = index + value;

                if (radiusStart >= 0 && radiusEnd < targets.length) {
                    targets.splice(radiusStart, radiusRange);
                } else {
                    console.log('Strike missed!');
                }
                break;
        }

        line = array.shift();

    }

    console.log(targets.join('|'));

}

movingTarget((["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])
);