function oddOccurrences(words) {
    const result = {};

    const arrayOfWords = words.split(' ').map(w => w.toLowerCase());
    arrayOfWords.forEach(word => {
        if (!result.hasOwnProperty(word)) {
            result[word] = 0;
        }
        result[word]++;
    });

    const sortedEntries = Object.entries(result).sort(([wordA, countA], [wordB, countB]) => countB - countA);

    let buff = '';
    for (const [word, count] of sortedEntries) {
        if (count % 2 !== 0) {
            buff += `${word} `;
        }
    }

    console.log(buff);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');