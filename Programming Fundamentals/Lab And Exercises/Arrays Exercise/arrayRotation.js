function arrayRotation(array, number) {

    for (let i = 0; i < number; i++) {
        let firstNumber = array.shift();
        array.push(firstNumber);
    }
    
    console.log(array.join(' '));

}

arrayRotation([51, 47, 32, 61, 21], 2);