function modernTimesOfHashTag(text) {
    const textArray = text.split(' ');

    textArray.forEach(word => {
        if (word.startsWith('#') && word.length > 1) {
            let wordToLowerCase = word.toLowerCase();
            let flag = true;

            for (let i = 1; i < wordToLowerCase.length; i++) {
                if (wordToLowerCase.charCodeAt(i) < 97 || wordToLowerCase.charCodeAt(i) > 122) {
                    flag = false;
                    break;
                }
            }

            if(flag){
                word = word.substring(1);
                console.log(word);
            }
        }
    });
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');