function dungeonestDark(array) {

    let dungeon = array[0].split('|')
    let health = 100;
    let coins = 0;
    let roomsCounter = 0;
    let totalCoins = 0;

    for (let i = 0; i < dungeon.length; i++) {

        let currentRoom = dungeon[i].split(' ');
        let command = currentRoom[0];
        let number = Number(currentRoom[1]);
        roomsCounter++;

        if (command === 'potion') {
            if ((health + number) > 100) {
                number = 100 - health;
                health = 100;
            } else {
                health += number;
            }
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest') {
            coins = number;
            totalCoins += coins;
            console.log(`You found ${coins} coins.`);
        } else {
            health -= number;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${roomsCounter}`);
                return;
            }
        }
    }

    console.log("You've made it!");
    console.log(`Coins: ${totalCoins}`);
    console.log(`Health: ${health}`);

}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);