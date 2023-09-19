function substring(word, index, count) {
    let result = word.substring(index, count + index);
    console.log(result);
}

substring('ASentence', 1, 8);
substring('SkipWord', 4, 7);