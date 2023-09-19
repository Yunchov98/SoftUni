function countStringOccurrences(sentence, serchedWord) {
    const words = sentence.split(' ');
    let counter = 0;

    for (const currentWord of words) {
        if (currentWord === serchedWord) {
            counter++;
        }
    }
    
    console.log(counter);
}

countStringOccurrences('This is a word and it also is a sentence', 'is');