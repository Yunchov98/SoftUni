function addAndRemoveElements(array) {
    let number = 1;
    const myArr = [];

    const commands = {
        add() {
            return myArr.push(number++);
        },
        remove() {
            return myArr.pop(number++);
        },
    };

    array.forEach(command => {
        commands[command]();
    });

    if (myArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(myArr.join('\n'));
    }
}

addAndRemoveElements(['add', 'add', 'add', 'add']);
console.log('-----------');
addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
);
addAndRemoveElements(['remove']);