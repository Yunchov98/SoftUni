function wordsUppercase(string) {
    const pattern = /\w+/g;

    const match = string.match(pattern);
    console.log(match.join(', ').toUpperCase());
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');