function gladiatorInventory(array) {

    let equipment = array.shift().split(' ');

    for (let el of array) {

        let currentRow = el.split(' ');
        let command = currentRow.shift();
        let item = currentRow.shift();

        switch (command) {
            case 'Buy':
                if (!equipment.includes(item)) {
                    equipment.push(item);
                }
                break;
            case 'Trash':
                let index = equipment.indexOf(item);
                if (equipment.includes(item)) {
                    equipment.splice(index, 1);
                }
                break;
            case 'Repair':
                let indexOfRepairdItem = equipment.indexOf(item);
                if (equipment.includes(item)) {
                    let repairedItem = equipment.splice(indexOfRepairdItem, 1)
                    equipment.push(repairedItem.join(' '));
                }
                break;
            case 'Upgrade':
                let currentItem = item.split('-');
                let itemToUpgrade = currentItem[0];
                let indexOfUpgradedItem = equipment.indexOf(itemToUpgrade);
                if (equipment.includes(itemToUpgrade)) {
                    equipment.splice(indexOfUpgradedItem + 1, 0, currentItem.join(':'));
                }
                break;
        }
    }

    console.log(equipment.join(' '));

}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
);