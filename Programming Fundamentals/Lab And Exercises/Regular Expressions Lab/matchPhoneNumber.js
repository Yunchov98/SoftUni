function matchPhoneNumber(phones) {
    const pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;

    const finalPhonesNumbers = [];
    const currentPhoneNumber = phones.shift();

    const matches = currentPhoneNumber.match(pattern);
    for (const match of matches) {
        finalPhonesNumbers.push(match);
    }

    console.log(finalPhonesNumbers.join(', '));
}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);