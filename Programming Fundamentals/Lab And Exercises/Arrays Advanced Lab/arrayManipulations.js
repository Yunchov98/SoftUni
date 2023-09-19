function arrayManipulations(arrayOfStrings) {

    let arrayForManipulate = arrayOfStrings.shift()
                                           .split(' ')
                                           .map(Number);

    function remove(num) {
        arrayForManipulate = arrayForManipulate.filter(el => el !== num);
    }

    for (let i = 0; i < arrayOfStrings.length; i++) {
        let [command, firstNumber, secondNumber] = arrayOfStrings[i].split(' ');
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);

        switch (command) {
            case 'Add': arrayForManipulate.push(firstNumber); break;
            case 'Remove': remove(firstNumber); break;
            case 'RemoveAt': arrayForManipulate.splice(firstNumber, 1); break;
            case 'Insert': arrayForManipulate.splice(secondNumber, 0, firstNumber); break;
        }
    }

    console.log(arrayForManipulate.join(' '));

}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);

//function declarations
 // function add(el) {
    //     arrayForManipulate.push(el);
    // }

    // function removeAt(index) {
    //     arrayForManipulate.splice(index, 1);
    // }

    // function insert(num, index) {
    //     arrayForManipulate.splice(index, 0, num);
    // }