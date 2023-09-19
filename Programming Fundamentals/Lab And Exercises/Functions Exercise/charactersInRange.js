function checkCharCode(firstChar, secondChar) {

    let startChar = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let endChar = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());

    let myArr = [];

    for (let i = startChar + 1; i < endChar; i++) {
        myArr.push(String.fromCharCode(i));
    }

    return myArr.join(' ');

}

checkCharCode('C', '#');
