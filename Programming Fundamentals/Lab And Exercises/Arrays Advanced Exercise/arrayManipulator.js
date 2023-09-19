function arrayManipulator(arrayOfNumbers, arrayOfCommands) {

    for (let el of arrayOfCommands) {

        let commands = el.split(' ');
        let command = commands[0];

        switch (command) {
            case 'add':
                let indexToAdd = Number(commands[1]);
                let elementToAdd = Number(commands[2]);
                arrayOfNumbers.splice(indexToAdd, 0, elementToAdd);
                break;
            case 'addMany':
                let indexToAddMany = Number(commands[1]);
                commands.splice(0, 2);
                let numbersToAdd = commands.map(Number);
                arrayOfNumbers.splice(indexToAddMany, 0, ...numbersToAdd);
                break;
            case 'contains':
                let containElement = Number(commands[1]);
                let indexOfElement = arrayOfNumbers.indexOf(containElement);
                console.log(indexOfElement);
                break;
            case 'remove':
                let elementToRemove = Number(commands[1]);
                arrayOfNumbers.splice(elementToRemove, 1);
                break;
            case 'shift':
                let elementToShift = Number(commands[1]);

                for (let i = 0; i < elementToShift; i++) {
                    arrayOfNumbers.push(arrayOfNumbers.shift());
                }

                break;
            case 'sumPairs':
                let myArr = [];

                if (arrayOfNumbers.length % 2 !== 0) {
                    arrayOfNumbers.push(0);
                }

                for (let i = 0; i < arrayOfNumbers.length; i += 2) {
                    let sum = arrayOfNumbers[i] + arrayOfNumbers[i + 1];
                    myArr.push(sum);
                }

                arrayOfNumbers = myArr;
                break;
            case 'print':
                console.log(`[ ${arrayOfNumbers.join(", ")} ]`);
                break;
        }
    }
}

arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
);