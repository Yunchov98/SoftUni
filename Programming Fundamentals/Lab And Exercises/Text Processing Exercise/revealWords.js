function revealWords(searchWords, text) {
    text = ` ${text} `;
    const searchWord = searchWords.split(', ');

    searchWord.forEach(word => {
        const match = '*'.repeat(word.length);
        text = text.replace(match, word);
    });

    console.log(text)
}

revealWords('great',
    'softuni is ***** place for learning new programming languages'
);
console.log('----------------------');
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
)