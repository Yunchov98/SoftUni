function wordOccurrences(input) {
    const map = new Map();

    for (const word of input) {
        if (!map.has(word)) {
            map.set(word, 1);
        } else {
            const currentCount = map.get(word) + 1;
            map.set(word, currentCount)
        }
    }

    let sortedMap = Array.from(map).sort((a, b) => b[1] - a[1]);

    for (const [word, count] of sortedMap) {
        console.log(`${word} -> ${count} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);