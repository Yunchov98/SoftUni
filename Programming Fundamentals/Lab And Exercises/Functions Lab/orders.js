function orders(product, quantity) {

    let totalPrice = 0;

    switch (product) {
        case 'coffee': totalPrice = coffeePrice() * quantity; break;
        case 'water': totalPrice = waterPrice() * quantity; break;
        case 'coke': totalPrice = cokePrice() * quantity; break;
        case 'snacks': totalPrice = snacksPrice() * quantity; break;
    }

    console.log(totalPrice.toFixed(2));

    function coffeePrice() {
        return 1.50;
    }

    function waterPrice() {
        return 1.00;
    }

    function cokePrice() {
        return 1.40;
    }

    function snacksPrice() {
        return 2.00;
    }
}

orders('water', 5);