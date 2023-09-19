function movingTarget(array) {

    let numbers = array.shift().split(' ').map(Number);
    let line = array.shift();

    while (line !== 'End') {
        let [command, index, value] = line.split(' ');
        index = Number(index);
        value = Number(value);

        switch (command) {
            case 'Shoot':
                if (numbers.length >= index && index >= 0) {
                    numbers[index] -= value;
                    if (numbers[index] <= 0) {
                        numbers.splice(index, 1);
                    }
                }
                break;
            case 'Add':
                if (numbers.length > index && index >= 0) {
                    numbers.splice(index, 0, value);
                } else {
                    console.log('Invalid placement!');
                }
                break;
            case 'Strike':
                
                const radiusRange = 1 + (value * 2);
                const radiusStart = index - value;
                const radiusEnd = index + value;

                if (radiusStart >= 0 && radiusEnd < numbers.length) {
                    numbers.splice(radiusStart, radiusRange);
                } else {
                    console.log('Strike missed!');
                }
                break;
        }

        line = array.shift();
    }

    console.log(numbers.join('|'));

}

movingTarget((["1 2 3 4 5",
    "Strike 0 1",
    "End"])
);