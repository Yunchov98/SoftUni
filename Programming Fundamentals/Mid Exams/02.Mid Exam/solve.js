function x(input) {
    let betterInput = input.shift().split(' ').map(Number);
    let avg = 0;
    for (let i = 0; i < betterInput.length; i++) {
        avg += betterInput[i];
    }
    let finalSum = avg / betterInput.length;

    let newAvg = [];

    for (let i = 0; i < betterInput.length; i++) {
        if (finalSum < betterInput[i]) {
            newAvg.push(betterInput[i])
        }
    }
    
    if (newAvg.length <= 0) {
        console.log('No');
    }
    if (newAvg.length > 5) {
        let go = newAvg.sort((a, b) => b - a);
        let sliced = go.splice(0, 5);
        console.log(sliced.join(' '));

    }
    
    else if (newAvg.length < 5 && newAvg.length !== 0) {
        let sorted = newAvg.sort((a, b) => b - a);
        console.log(sorted.join(' '));
    } 

}

x(['5 2 3 4 -10 30 40 50 20 50 60 60 51'])