function spaceTravel(array) {

    const commands = array[0].split('||');
    let startingFuel = Number(array[1]);
    let startingAmmunitions = Number(array[2]);

    for (let i = 0; i < commands.length; i++) {
        let [currentCommand, value] = commands[i].split(' ');
        value = Number(value);

        switch (currentCommand) {
            case 'Travel':
                startingFuel -= value;
                if (startingFuel >= 0) {
                    console.log(`The spaceship travelled ${value} light-years.`);
                } else {
                    console.log('Mission failed.');
                    return;
                }
                break;
            case 'Enemy':
                if (startingAmmunitions >= value) {
                    startingAmmunitions -= value;
                    console.log(`An enemy with ${value} armour is defeated.`);
                } else {
                    if (startingFuel >= 2 * value) {
                        startingFuel -= 2 * value;
                        console.log(`An enemy with ${value} armour is outmaneuvered.`);
                    } else {
                        console.log('Mission failed.');
                        return;
                    }
                }
                break;
            case 'Repair':
                const addedAmmunitions = 2 * value;
                startingFuel += value;
                startingAmmunitions += addedAmmunitions;
                console.log(`Ammunitions added: ${addedAmmunitions}.`);
                console.log(`Fuel added: ${value}.`);
                break;
            case 'Titan':
                console.log('You have reached Titan, all passengers are safe.');
                break;
        }
    }
}

spaceTravel((['Travel 10||Enemy 30||Repair 15||Titan',
    '50',
    '80'])
);