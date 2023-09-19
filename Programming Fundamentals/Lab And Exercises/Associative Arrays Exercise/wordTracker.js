function wordTracker(input) {
    const words = {};

    const neededWords = input.shift().split(' ');

    neededWords.forEach(word => {
        words[word] = 0;
    });

    input.forEach(word => {
        if (words.hasOwnProperty(word)) {
            words[word]++;
        }
    });

    const sortedEntries = Object.entries(words).sort(([wordA, countA], [wordB, countB]) => countB - countA);

    for (const [word, count] of sortedEntries) {
        console.log(`${word} - ${count}`);
    }
}

wordTracker(
    [
        'this sentence',
        'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
);