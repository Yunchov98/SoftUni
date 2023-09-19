function pipesInPool(input) {

    let volume = Number(input[0]);
    let pOne = Number(input[1]);
    let pTwo = Number(input[2]);
    let hours = Number(input[3]);

    let pOneFilling = pOne * hours;
    let pTwoFilling = pTwo * hours;
    let total = pOneFilling + pTwoFilling;

    let totalInPercent = total / volume * 100;
    let pOneInPercent = pOneFilling / total * 100;
    let pTwoInPercent = pTwoFilling / total * 100;
    let diff = total - volume;

    if(volume >= total){
         console.log(`The pool is ${totalInPercent.toFixed(2)}% full. Pipe 1: ${pOneInPercent.toFixed(2)}%. Pipe 2: ${pTwoInPercent.toFixed(2)}%.`);
    }else{
        console.log(`For ${hours} hours the pool overflows with ${diff.toFixed(2)} liters.`);
    }
}
pipesInPool(['1000', '100', '120', '3']);
pipesInPool(['100', '100', '100', '2.5'])
