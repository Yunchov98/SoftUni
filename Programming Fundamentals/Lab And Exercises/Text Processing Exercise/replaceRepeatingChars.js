function replaceRepeatingChars(string) {
    const stringArr = string.split('');
    const result = [];

    let index = 0;
    const end = stringArr.length;

    while(index < end){
        if(stringArr[index] !== stringArr[index + 1]){
            result.push(stringArr[index]);
        }

        index++;
    }

    console.log(result.join(''));
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');