function cardGame(input) {
    const result = {};

    input.forEach(line => {
        const tokens = line.split(': ');
        const name = tokens.shift();
        const deck = tokens[0];
        const deckAsArray = deck.split(', ');

        if (!result.hasOwnProperty(name)) {
            result[name] = new Set();
        }

        deckAsArray.forEach(card => {
            result[name].add(card);
        });
    });

    const entrie = Object.entries(result);
    for (const [player, deck] of entrie) {
        let sum = calcCards(deck);
        console.log(`${player}: ${sum}`);
    }

    function calcCards(deck) {
        const eNumPower = {
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            '10': 10,
            'J': 11,
            'Q': 12,
            'K': 13,
            'A': 14,
        };
        const eNumType = {
            'C': 1,
            'D': 2,
            'H': 3,
            'S': 4,
        };

        let sum = 0;
        for (const card of deck) {
            const cardInfo = card.split('');
            const cardType = cardInfo.pop();
            const cardPower = cardInfo.join('');
            const cardTypeAsNumber = eNumType[cardType];
            const cardPowerAsNumber = eNumPower[cardPower];
            sum += cardPowerAsNumber * cardTypeAsNumber;
        }

        return sum;
    }
}

cardGame(
    [
        'Peter: 2C, 4H, 9H, AS, QS',
        'Tomas: 3H, 10S, JC, KD, 5S, 10S',
        'Andrea: QH, QC, QS, QD',
        'Tomas: 6H, 7S, KC, KD, 5S, 10C',
        'Andrea: QH, QC, JS, JD, JC',
        'Peter: JD, JD, JD, JD, JD, JD'
    ]
);