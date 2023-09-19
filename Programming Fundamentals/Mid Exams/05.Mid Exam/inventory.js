function inventory(array) {

    let inventory = array.shift().split(', '); // вземаме инвентара от входните данни, 
                                               // като го разделяме със запетайка и спейс;

    while (array[0] !== 'Craft!') { // while цикъл, който върти до получаване на команда 'Craft!';
        let currentComand = array.shift().split(' - '); // вземаме си командите от масива, като ги разделяме с тире('-') и спейс;
        let command = currentComand[0]; // от нулевият индекс на горната ни променлива си взимаме командата;
        let item = currentComand[1]; // от първият индекс на същата променлива си вземаме предмета;

        switch (command) { // switch case по командите:
            case 'Collect': // при команда 'Collect':
                if (!inventory.includes(item)) { // проверяваме дали предмета го няма в нашият инвентар;
                    inventory.push(item); // ако го няма го вкарваме на последно място;
                }
                break; // прекратяваме текущият кейс;
            case 'Drop': // при команда 'Drop':
                if (inventory.includes(item)) { // проверяваме дали предмета го има в нашият инвентар;
                    let indexOfDropedItem = inventory.indexOf(item); // намираме индекса на предмета, който трябва да премахнем;
                    inventory.splice(indexOfDropedItem, 1); // премахваме предмета;
                }
                break; // прекратяваме текущият кейс;
            case 'Combine Items': // при съвпадение с 'Combine Items':

                let joinedItems = item.split(':'); // разделяме текущият предмет с ':';
                let oldItem = joinedItems[0]; // вземаме старият предмет от нулевият индекс на разделеният предмет;
                let newItem = joinedItems[1]; // вземаме новият индекс от първият индекс на разделения предмет;

                if (inventory.includes(oldItem)) { // проверяваме дали старият предмет го има в инвентара ни;
                    let indexOfOldItem = inventory.indexOf(oldItem); // намираме на кой индекс се намира старият предмет;
                    inventory.splice(indexOfOldItem + 1, 0, newItem); // добавяме новият предмет след старият предмет (indexOfOldItem + 1);
                }
                break; // прекратяваме текущият кейс;
            case 'Renew': // при команда 'Renew':
                if (inventory.includes(item)) { // проверяваме дали предмета съществува в нашият инвентар;
                    let index = inventory.indexOf(item); // намираме индекса на предмета;
                    let itemForRenew = inventory.splice(index, 1); // вземаме предмета, който трябва да се постави на последно място;
                    inventory.push(itemForRenew); // сменяме позицията на предмета, като го поставяме на последно място;
                }
                break; // прекратяваме текущият кейс;
        }
    }

    console.log(inventory.join(', ')); // принтираме

}

    // written by Georgi Yunchov 18.10.2022;

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]

);