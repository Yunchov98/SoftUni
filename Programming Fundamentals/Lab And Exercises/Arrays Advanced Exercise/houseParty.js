function houseParty(array) {

    let list = [];

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(' ');
        let name = command[0];

        if (command.length === 3) {
            if (!list.includes(name)) {
                list.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (list.includes(name)) {
                let index = list.indexOf(name);
                list.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`)
            }
        }
    }

    list.forEach(element => {
        console.log(element);
    });
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
);