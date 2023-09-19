function numbers(array) {

    let numbers = array.split(' ').map(Number).sort((a, b) => b - a);
    let result = [];

    let sumOfNumber = 0;

    for (let i = 0; i < numbers.length; i++) {
        sumOfNumber += numbers[i];
    }

    let avg = sumOfNumber / numbers.length;

    for (let k = 0; k < numbers.length; k++) {
        if (numbers[k] > avg && result.length < 5) {
            result.push(numbers[k]);
        }
    }

    if(result.length > 0){
        console.log(result.join(' '));
    }else{
        console.log('No'); 
    }
}

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');