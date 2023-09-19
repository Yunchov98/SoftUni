function playingCards(cardFace, cardSuit) {
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

    return {
        cardFace,
        cardSuit: cardSuits[cardSuit],
        toString() {
            return `${this.cardFace}${this.cardSuit}`;
        }
    };
}

console.log(playingCards('1', 'S').toString());