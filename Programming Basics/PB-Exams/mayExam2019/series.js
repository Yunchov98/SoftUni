function series(input) {

    let index = 0;

    let budget = Number(input[index]);
    index++;
    let serialsCount = Number(input[index]);
    index++;

    let totalMoney = 0;

    for (let i = 0; i < serialsCount; i++) {
        let name = input[index];
        index++;
        let price = Number(input[index]);
        index++;

        switch (name) {
            case 'Thrones':
                price *= 0.50;
                break;
            case 'Lucifer':
                price *= 0.60;
                break;
            case 'Protector':
                price *= 0.70;
                break;
            case 'TotalDrama':
                price *= 0.80;
                break;
            case 'Area':
                price *= 0.90;
                break;
        }
        totalMoney += price;
    }

    if (budget >= totalMoney) {
        console.log(`You bought all the series and left with ${(budget - totalMoney).toFixed(2)} lv.`);
    } else {
        console.log(`You need ${(totalMoney - budget).toFixed(2)} lv. more to buy the series!`);
    }

}

series(["25",
"6",
"Teen Wolf",
"8",
"Protector",
"5",
"TotalDrama",
"5",
"Area",
"4",
"Thrones",
"5",
"Lucifer",
"9"])
;