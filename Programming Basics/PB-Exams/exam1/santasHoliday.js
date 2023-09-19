function santasHoliday(input) {

    let daysCount = Number(input[0]);
    let type = input[1];
    let grade = input[2];

    let nightsCount = daysCount - 1;
    let price = 0;
    let totalPrice = 0;

    switch(type){
        case 'room for one person':
            price = 18.00;
            totalPrice = nightsCount * price;
             break;
        case 'apartment': 
        price = 25.00;
        totalPrice = nightsCount * price;
        if(daysCount < 10){
            totalPrice *= 0.70;
        }else if(daysCount >= 10 && daysCount <= 15){
            totalPrice *= 0.65;
        }else{
            totalPrice *= 0.50;
        }
        break;
        case 'president apartment':
            price = 35.00;
        totalPrice = nightsCount * price;
        if(daysCount < 10){
            totalPrice *= 0.90;
        }else if(daysCount >= 10 && daysCount <= 15){
            totalPrice *= 0.85;
        }else{
            totalPrice *= 0.80;
        }
             break;
    }

    if(grade === 'positive'){
        totalPrice *= 1.25;
    }else{
        totalPrice *= 0.90;
    }

    console.log(totalPrice.toFixed(2));

}

santasHoliday(["30",
"president apartment",
"negative"]);