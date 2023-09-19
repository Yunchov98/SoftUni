function transportPrice(input) {

    let kilometers = Number(input[0]);
    let word = input[1];
    let price = 0;

    if (kilometers < 20) {
        switch (word) {
            case 'day': price = 0.70 + kilometers * 0.79; break;
            case 'night': price = 0.70 + kilometers * 0.90; break;
        }
    } else if (kilometers >= 20 && kilometers < 100) {
        price = kilometers * 0.09;
    } else {
        price = kilometers * 0.06;
    }

    console.log(price.toFixed(2));

}

transportPrice(['7', 'night']);