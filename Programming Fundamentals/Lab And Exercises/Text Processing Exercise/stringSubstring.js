function stringSubstring(serachedWord, text) {
    const textArr = text.split(' ');

    for (const word of textArr) {
        if (word.toLowerCase() === serachedWord.toLowerCase()) {
            console.log(serachedWord);
            return;
        }
    }

    console.log(`${serachedWord} not found!`);
}

stringSubstring('javascript',
    'JavaScript is the best programming language'
);