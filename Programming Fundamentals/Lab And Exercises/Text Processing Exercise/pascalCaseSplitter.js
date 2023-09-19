function pascalCaseSplitter(string) {
    let result = string[0];
    const stringToLowerCase = string.toLowerCase();

    for (let index = 1; index < string.length; index++) {
        if (string[index] !== stringToLowerCase[index]) {
            result += ', ';
        }
        result += string[index];
    }
    
    console.log(result);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');