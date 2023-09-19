function deckOfCards(array) {
    let result = [];

    array.forEach(cardInfo => {
        const cardFace = cardInfo.slice(0, -1);
        const cardSuit = cardInfo.slice(-1);
        let card = '';

        try {
            card = createCard(cardFace, cardSuit);
            result.push(card);
        } catch (err) {
            result = [`Invalid card: ${cardInfo}`];
        }
    });

    console.log(result.join(' '));

    function createCard(cardFace, cardSuit) {
        const cardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const cardSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        };

        if (!cardFaces.includes(cardFace)) {
            throw new Error('Error');
        }

        if (cardSuits[cardSuit] === undefined) {
            throw new Error('Error');
        }

        const result = {
            cardFace,
            cardSuit: cardSuits[cardSuit],
            toString() {
                return `${this.cardFace}${this.cardSuit}`;
            }
        };

        return result;
    }
}

deckOfCards(['AS', '10D', 'KH', '2C']);