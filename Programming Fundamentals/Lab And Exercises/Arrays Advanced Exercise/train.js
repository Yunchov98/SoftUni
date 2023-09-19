function train(array) {

    let peopleInWagon = array.shift().split(' ').map(Number);
    let maxCapacity = Number(array.shift());

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(' ');
        if (command[0] === 'Add') {
            peopleInWagon.push(Number(command[1]));
        } else {
            for (let k = 0; k < peopleInWagon.length; k++) {
                if ((Number(command[0]) + peopleInWagon[k]) <= maxCapacity) {
                    peopleInWagon[k] += Number(command[0]);
                    break;
                }
            }
        }
    }

    console.log(peopleInWagon.join(' '));
    
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);