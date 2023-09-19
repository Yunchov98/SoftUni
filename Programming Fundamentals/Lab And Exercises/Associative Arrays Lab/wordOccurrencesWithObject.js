function wordOccurrences(input) {
    const myObj = {};

    for (const word of input) {
        if (!myObj.hasOwnProperty(word)) {
            myObj[word] = 1;
        } else {
            myObj[word] += 1;
        }
    }

    let entries = Object.entries(myObj);
    entries = entries.sort(([wordA, countA], [wordB, countB]) => countB - countA);

    for (const [word, count] of entries) {
        console.log(`${word} -> ${count} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);