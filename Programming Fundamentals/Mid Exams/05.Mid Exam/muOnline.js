function muOnline(strings) {

    let arr = strings.split('|'); // създаваме масив от стринговете, които получаваме като входни данни;
    let health = 100; // създаваме променлива със стойност 100 (началната ни кръв);
    let bitcoins = 0; // създаваме променлива със стойност 0 (броят на биткойните в началото);
    let roomCounter = 0; // създаваме променлива (брояч) със стойност 0, която ще брои стаите през които минаваме;

    for (let i = 0; i < arr.length; i++) { // for цикъл, който обхожда вече създаденият масив;
        let [command, value] = arr[i].split(' '); // деструктурираме масива, като взимаме команда и стойност;
        value = Number(value); // правим value тип number от тип string;

        switch (command) { // правим switch case, който обхожда командите;
            case 'potion': // при съвпадение с 'potion':

                roomCounter++; // пост-инкрементация с единица (увеличаваме броят на стаите с 1);
                health += value; // към текущата кръв добавяме стойността, която сме получили от деструктурирането;

                if (health > 100) { // условна конструкция в която ако кръвта е по - голяма от 100:
                    console.log(`You healed for ${(100 + value - health)} hp.`); // принтираме като от текущата стойност вадим текущата кръв и добавяме 100, зада получим разлиакта;
                    health = 100; // задаваме стойност на кръвта (100);
                    console.log(`Current health: ${health} hp.`); // принтираме;
                } else {
                    console.log(`You healed for ${(value)} hp.`); // принтираме;
                    console.log(`Current health: ${health} hp.`); // принтираме;
                }
                break; // прекратяваме текущият кейс;
            case 'chest': // при съвпадение с 'chest':
                roomCounter++; // пост-инкрементация с единица (увеличаваме текущата стойност на променливата с 1);
                console.log(`You found ${value} bitcoins.`); // принтираме;
                bitcoins += value; // към текущата стойност на bitcoins добавяме стойността на value;
                break; // прекратяваме текущият кейс;
            default: // default case за всеки друг случай освен горните два:

                health -= value; // намаляваме текущата стойност на кръвта със стойоността на value;

                if (health > 0) { // условна конструкция при която, ако кръвта е по - голяма от 0:
                    roomCounter++; // пост-инкрементация с единица (увеличаваме текущата стойност на променливата с 1);
                    console.log(`You slayed ${command}.`); // принтираме;
                } else {
                    roomCounter++; // пост-инкрементация с единица (увеличаваме текущата стойност на променливата с 1);
                    console.log(`You died! Killed by ${command}.`); // принтираме;
                    console.log(`Best room: ${roomCounter}`); // принтираме;
                    return; // прекъсваме функцията;
                    // При достигане до return, функцията прекъсва и всичко под return не може да бъде достигнато;
                }
                break; // прекратяваме текущият кейс;
        }
    }

    console.log("You've made it!"); // принтираме ако не сме стигнали до return;
    console.log(`Bitcoins: ${bitcoins}`); // принтираме ако не сме стигнали до return;
    console.log(`Health: ${health}`); // принтираме ако не сме стигнали до return;

}

    // written by Georgi Yunchov 18.10.2022;

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");