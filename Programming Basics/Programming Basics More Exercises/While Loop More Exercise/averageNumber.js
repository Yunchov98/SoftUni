function averageNumber(input) {

    let num = Number(input[0]);

    let res = 0;

    for (let i = 1; i <= num; i++) {
        let currentNum = Number(input[i]);
        res += currentNum;
    }

    let avg = res / num;

    console.log(avg.toFixed(2));

}

averageNumber(['4', '3', '2', '4', '2']);