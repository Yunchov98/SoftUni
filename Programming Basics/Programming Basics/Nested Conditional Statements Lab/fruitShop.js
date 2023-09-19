function fruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);

    let totalPrice = 0;

    if (day === 'Monday') {
        switch (fruit) {
            case 'banana': totalPrice = quantity * 2.50; break;
            case 'apple': totalPrice = quantity * 1.20; break;
            case 'orange': totalPrice = quantity * 0.85; break;
            case 'grapefruit': totalPrice = quantity * 1.45; break;
            case 'kiwi': totalPrice = quantity * 2.70; break;
            case 'pineapple': totalPrice = quantity * 5.50; break;
            case 'grapes': totalPrice = quantity * 3.85; break;
        }
    } else if (day === 'Tuesday') {
        switch (fruit) {
            case 'banana': totalPrice = quantity * 2.50; break;
            case 'apple': totalPrice = quantity * 1.20; break;
            case 'orange': totalPrice = quantity * 0.85; break;
            case 'grapefruit': totalPrice = quantity * 1.45; break;
            case 'kiwi': totalPrice = quantity * 2.70; break;
            case 'pineapple': totalPrice = quantity * 5.50; break;
            case 'grapes': totalPrice = quantity * 3.85; break;
        }
    } else if (day === 'Wednesday') {
        switch (fruit) {
            case 'banana': totalPrice = quantity * 2.50; break;
            case 'apple': totalPrice = quantity * 1.20; break;
            case 'orange': totalPrice = quantity * 0.85; break;
            case 'grapefruit': totalPrice = quantity * 1.45; break;
            case 'kiwi': totalPrice = quantity * 2.70; break;
            case 'pineapple': totalPrice = quantity * 5.50; break;
            case 'grapes': totalPrice = quantity * 3.85; break;
        }
    } else if (day === 'Thursday') {
        switch (fruit) {
            case 'banana': totalPrice = quantity * 2.50; break;
            case 'apple': totalPrice = quantity * 1.20; break;
            case 'orange': totalPrice = quantity * 0.85; break;
            case 'grapefruit': totalPrice = quantity * 1.45; break;
            case 'kiwi': totalPrice = quantity * 2.70; break;
            case 'pineapple': totalPrice = quantity * 5.50; break;
            case 'grapes': totalPrice = quantity * 3.85; break;
        }
    } else if (day === 'Friday') {
        switch (fruit) {
            case 'banana': totalPrice = quantity * 2.50; break;
            case 'apple': totalPrice = quantity * 1.20; break;
            case 'orange': totalPrice = quantity * 0.85; break;
            case 'grapefruit': totalPrice = quantity * 1.45; break;
            case 'kiwi': totalPrice = quantity * 2.70; break;
            case 'pineapple': totalPrice = quantity * 5.50; break;
            case 'grapes': totalPrice = quantity * 3.85; break;
        }
    } else if (day === 'Saturday') {
        switch (fruit) {
            case 'banana': totalPrice = quantity * 2.70; break;
            case 'apple': totalPrice = quantity * 1.25; break;
            case 'orange': totalPrice = quantity * 0.90; break;
            case 'grapefruit': totalPrice = quantity * 1.60; break;
            case 'kiwi': totalPrice = quantity * 3.00; break;
            case 'pineapple': totalPrice = quantity * 5.60; break;
            case 'grapes': totalPrice = quantity * 4.20; break;
        }
    } else if (day === 'Sunday') {
        switch (fruit) {
            case 'banana': totalPrice = quantity * 2.70; break;
            case 'apple': totalPrice = quantity * 1.25; break;
            case 'orange': totalPrice = quantity * 0.90; break;
            case 'grapefruit': totalPrice = quantity * 1.60; break;
            case 'kiwi': totalPrice = quantity * 3.00; break;
            case 'pineapple': totalPrice = quantity * 5.60; break;
            case 'grapes': totalPrice = quantity * 4.20; break;
        }
    }

    if (totalPrice > 0) {
        console.log(totalPrice.toFixed(2));
    } else {
        console.log('error');
    }
}

fruitShop(['apple', 'Tuesday', '2']);
