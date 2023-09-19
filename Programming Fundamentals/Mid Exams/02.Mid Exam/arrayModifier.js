function arrayModifier(array) {

    let numbers = array.shift().split(' ').map(Number);

    while (array[0].toLowerCase() !== 'end') {
        let [command, firstIndex, secondIndex] = array.shift().split(' ');

        firstIndex = Number(firstIndex);
        secondIndex = Number(secondIndex);

        switch (command) {
            case 'swap':
                let firstElement = numbers[firstIndex];
                let secondElement = numbers[secondIndex];
                numbers[firstIndex] = secondElement;
                numbers[secondIndex] = firstElement;
                break;
            case 'multiply':
                let first = numbers[firstIndex];
                let second = numbers[secondIndex];
                let result = first * second;
                numbers[firstIndex] = result;
                break;
            case 'decrease':
                numbers = numbers.map(a => a - 1);
                break;
        }
    }

    console.log(numbers.join(', '));

}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
);