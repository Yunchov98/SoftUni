function shoppingList(array) {

    let list = array.shift().split('!');
    let line = array.shift();

    while (line !== 'Go Shopping!') {
        let [command, item, newItem] = line.split(' ');

        switch (command) {
            case 'Urgent':
                if (!list.includes(item)) {
                    list.unshift(item);
                }
                break;
            case 'Unnecessary':
                if (list.includes(item)) {
                    let index = list.indexOf(item);
                    list.splice(index, 1);
                }
                break;
            case 'Correct':
                if (list.includes(item)) {
                    let index = list.indexOf(item);
                    list[index] = newItem;
                }
                break;
            case 'Rearrange':
                if (list.includes(item)) {
                    let index = list.indexOf(item);
                    let splicedItem = list.splice(index, 1);
                    list.push(splicedItem);
                }
                break;
        }
        line = array.shift();
    }

    console.log(list.join(', '));

}

shoppingList((["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
);