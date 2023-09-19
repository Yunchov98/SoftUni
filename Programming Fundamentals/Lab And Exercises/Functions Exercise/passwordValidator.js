function passwordValidator(password) {

    let digitsCounter = 0;
    let isSymbol = false;
    let passwordLength = password.length;

    if (passwordLength < 6 || passwordLength > 10) {
        console.log('Password must be between 6 and 10 characters');
    }

    for (let i = 0; i < passwordLength; i++) {
        let currentChar = password[i].charCodeAt();
        let isDigit = currentChar >= 48 && currentChar <= 57;
        let isBigNumber = currentChar >= 65 && currentChar <= 90;
        let isSmallNumber = currentChar >= 97 && currentChar <= 122;

        if (isDigit) {
            digitsCounter++;
        }

        if (!isDigit && !isBigNumber && !isSmallNumber) {
            isSymbol = true;
        }
    }

    if (isSymbol) {
        console.log('Password must consist only of letters and digits');
    }

    if (digitsCounter < 2) {
        console.log('Password must have at least 2 digits');
    }

    if (!isSymbol && passwordLength >= 6 && passwordLength <= 10 && digitsCounter >= 2) {
        console.log('Password is valid');
    }
}

passwordValidator('Pa$s$s');