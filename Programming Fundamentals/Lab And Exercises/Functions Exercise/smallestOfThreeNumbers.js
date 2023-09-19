function smallestOfThreeNumbers(firstNumber, secondNumber, thirdNumber) {

    if (thirdNumber < check()) {
        return thirdNumber;
    } else {
        return check();
    }

    function check() {
        if (firstNumber < secondNumber) {
            return firstNumber;
        } else {
            return secondNumber;
        }
    }

}

smallestOfThreeNumbers(600, 342, 123);
