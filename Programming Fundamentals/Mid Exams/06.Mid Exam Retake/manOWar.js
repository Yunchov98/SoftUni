function manOWar(array) {

    let pirateShip = array.shift().split('>').map(Number); // вземаме данните за пиратския кораб от масива във входните данни;
    let warship = array.shift().split('>').map(Number); // вземаме данни за военният кораб от масива във входните данни;
    let maxHealth = Number(array.shift()); // вземаме максималният живот от масива във входните данни;

    while (array[0] !== 'Retire') { // while цикъл до команда 'Retire':

        let currentCommand = array.shift().split(' '); // вземаме командата и елементите към нея;
        let command = currentCommand[0]; // вземаме конкретната команда;

        switch (command) { // switch case до определена команда:

            case 'Fire': // при команда 'Fire':
                let fireIndex = Number(currentCommand[1]); // вземаме индекса и го обръщаме в число;
                let damage = Number(currentCommand[2]); // вземаме щетите и ги обръщаме в число;

                if (fireIndex >= 0 && fireIndex < warship.length) { // проверяваме дали индекса е положителен и в граница;
                    warship[fireIndex] -= damage; // намаляваме конкретния елемент от warship със стойността на damage;
                    if (warship[fireIndex] <= 0) { // проверяваме дали конкретния елемент има стойност по - малка или равна на 0;
                        console.log('You won! The enemy ship has sunken.'); // печатаме;
                        return; // прекратяваме функцията;
                    }
                }
                break; // прекратяваме конкретният кейс;

            case 'Defend': // при команда 'Defend':
                let startIndex = Number(currentCommand[1]); // създаваме променлива с началният индекс и я обръщаме в число;
                let endIndex = Number(currentCommand[2]);   // създаваме променлива с крайният индекс и я обръщаме в число;
                let currentDamage = Number(currentCommand[3]); // създаваме променлива с конкретните щети и я обръщаме в число;

                if (startIndex >= 0 && startIndex < pirateShip.length && endIndex >= 0 && endIndex < pirateShip.length) { // проверяваме индекса;
                    if (endIndex < startIndex) { // ако началният индекс е по - голям от крайния индекс:
                        let temporaryIndex = startIndex; // създаваме променлива, на която присвояваме стойносста на началния индекс;
                        startIndex = endIndex; // задаваме стойността на крайният индекс на началния индекс;
                        endIndex = temporaryIndex; // задаваме стойността на temporaryIndex на крайният индекс;
                    }

                    for (let i = startIndex; i <= endIndex; i++) { // for цикъл от началният до крания индекс;
                        pirateShip[i] -= currentDamage; // намаляваме конкретния елемент на pirateShip със стойносста на currentDamage; 
                        if (pirateShip[i] <= 0) { // проверяваме дали конкретният елемент има стойност по - малка или равна на 0;
                            console.log('You lost! The pirate ship has sunken.'); // печатаме;
                            return; // прекратяваме фунцкията;
                        }
                    }
                }
                break; // прекратяваме конкретният кейс;

            case 'Repair':  // при команда 'Repair':
                let repairIndex = Number(currentCommand[1]); // вземаме си индекса и го обръщаме в число;
                let health = Number(currentCommand[2]); // вземаме конкретната кръв и я обръшаме в число;

                if (repairIndex >= 0 && repairIndex < pirateShip.length) { // проверяваме дали индексът е валиден;
                    pirateShip[repairIndex] += health; // към текущият елемент добавяме стойността на кръвта;
                    if (pirateShip[repairIndex] > maxHealth) { // проверяваме дали текущият елемент има повече кръв от максималното;
                        pirateShip[repairIndex] = maxHealth; // задаваме стойност на текущият елемент - максималната кръв;
                    }
                }
                break; // прекратяваме текущият кейс;

            case 'Status': // при команда 'Status':
                let critical = maxHealth * 0.20; // създаваме променлвиа за критична точка;
                let sectionsCounter = 0; // създаваме променлива брояч за секторите;

                for (let k = 0; k < pirateShip.length; k++) { // for цикъл за всички елемтни на pirateShip;
                    if (pirateShip[k] < critical) { // проверяваме дали конкретният елемент има по - малка стойност от критичната;
                        sectionsCounter++; // ако има повишаваме броят критичните сектори;
                    }
                }
                console.log(`${sectionsCounter} sections need repair.`); // печатаме;
                break; // прекратяваме текущият кейс;
        }
    }

    let pirateShipSum = 0; // създаваме променлива която държи сумата на pirateShip;

    for (let el of pirateShip) { // for of цикъл, който минава през всички елементи на pirateShip;
        pirateShipSum += el; // към pirateShipSum добавяме стойността на конкретния елемент;
    }

    let warshipSum = 0; // създаваме променлива която държи суамта на warship;

    for (let el of warship) { // for of цикъл, който минава през всички елементи на warship;
        warshipSum += el; // към warshipSum добавяме стойността на конкретни елемент;
    }

    console.log(`Pirate ship status: ${pirateShipSum}`); // печатаме;
    console.log(`Warship status: ${warshipSum}`); // печатаме;

}

    // written by Georgi Yunchov on 18.10.2022;

manOWar((["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])

);