function coins(input) {

    let sum = Number(input[0]);
    sum = Math.floor(sum * 100);

    let coinsCounter = 0;

    while (sum > 0) {
        if (sum >= 200) {
            sum -= 200;
            coinsCounter++;
        } else if (sum >= 100) {
            sum -= 100;
            coinsCounter++;
        } else if (sum >= 50) {
            sum -= 50;
            coinsCounter++;
        } else if (sum >= 20) {
            sum -= 20;
            coinsCounter++;
        } else if (sum >= 10) {
            sum -= 10;
            coinsCounter++;
        } else if (sum >= 5) {
            sum -= 5;
            coinsCounter++;
        } else if (sum >= 2) {
            sum -= 2;
            coinsCounter++;
        } else {
            sum -= 1;
            coinsCounter++;
        }
    }

    console.log(coinsCounter)

}

coins(['0.56']);