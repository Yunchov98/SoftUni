function treasureHunt(array) {

    let items = array.shift().split('|'); // вземаме предметите от масива във входните данни;

    while (array[0] !== 'Yohoho!') { // while цикъл, докато не получим команда 'Yohoho!';

        let currentCommand = array.shift().split(' '); // вземаме текущата команда и елементите с нея;
        let command = currentCommand.shift(); // вземаме конкретната команда;

        switch (command) { // switch case до получаване на определена команда;
            case 'Loot': // при получаване на команда 'Loot':
                for (let el of currentCommand) { // for of цикъл, който взема всички елементи;
                    if (!items.includes(el)) { // проверява дали текущият елемент го няма в нашият масив;
                        items.unshift(el); // ако елемента го няма, го поставя на последно място;
                    }
                }
                break; // прекратяваме текущия кейс;
            case 'Drop': // при получаване на команда 'Drop':
                let index = currentCommand.shift(); // вземаме индекса;

                if (index >= 0 && index < items.length) { // проверяваме дали стойността на индекса е валидна;
                    let item = items[index]; // създаваме промелнива, която държи нашият предмет;
                    items.splice(index, 1); // премахваме предмета;
                    items.push(item); // добавяме предмета на последно мято;
                }
                break; // прекратяваме текущия кейс;
            case 'Steal': // при команда 'Steal': 
                let count = currentCommand.shift(); // създаваме промелнива, която държи стойността на брят елементи;
                let stolenItems = items.splice(-count); // запазваме в нова променлива елементите, които премахваме от масива;
                console.log(stolenItems.join(', ')); // печатаме премахнатите елементи;
                break; // прекратяваме текущият кейс;
        }
    }

    if (items.length > 0) { // проверяваме дали дължината на масивът ни е по - голяма от 0;
        let lengthSum = 0; // променлива, която държи дължината на елементите в масива;

        for (let treasures of items) { // for of цикъл, който минава през всеки елемент от масива;
            lengthSum += treasures.length; // калкулира общата дължина на всички елементи в масива;
        }

        let averageGain = lengthSum / items.length; // пресмятаме средната печалба;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`); // печатаме;
    } else { // в случай, че дължината е по - малка или равна на 0;
        console.log('Failed treasure hunt.'); // печатаме;
    }
}

// written by Georgi Yunchov on 18.10.2022;

treasureHunt((["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])

);