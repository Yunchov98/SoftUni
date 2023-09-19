function divisionWithoutRemainder(input) {

    let index = 0;

    let numbersCount = Number(input[index]);
    index++;

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for(let i = 0; i < numbersCount; i++){
        let currentNumber = Number(input[index]);
        index++;

        if(currentNumber % 2 === 0){
            p1++;
        }
        if(currentNumber % 3 === 0){
            p2++;
        }
        if(currentNumber % 4 === 0){
            p3++;
        }
    }

    let p1InPercent = p1 / numbersCount * 100;
    let p2InPercent = p2 / numbersCount * 100;
    let p3InPercent = p3 / numbersCount * 100;

    console.log(`${p1InPercent.toFixed(2)}%`);
    console.log(`${p2InPercent.toFixed(2)}%`);
    console.log(`${p3InPercent.toFixed(2)}%`);

}

divisionWithoutRemainder(["10",
"680",
"2",
"600",
"200",
"800",
"799",
"199",
"46",
"128",
"65"])
;