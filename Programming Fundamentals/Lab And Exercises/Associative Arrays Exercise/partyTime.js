function partyTime(input) {
    const vipList = [];
    const regularList = [];

    let currentGuest = input.shift();

    while (currentGuest !== 'PARTY') {
        const isVIP = !isNaN(currentGuest[0]);
        if (isVIP) {
            vipList.push(currentGuest);
        } else {
            regularList.push(currentGuest);
        }

        currentGuest = input.shift();
    }

    let allGuests = vipList.concat(regularList);
    input.forEach(guest => {
        allGuests.splice(allGuests.indexOf(guest), 1);
    });

    console.log(allGuests.length);
    allGuests.forEach(guest => console.log(guest));
}

partyTime(
    [
        '7IK9Yo0h',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc',
        'tSzE5t0p',
        'PARTY',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc'
    ]
);