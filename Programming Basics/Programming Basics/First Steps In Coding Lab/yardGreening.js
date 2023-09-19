function yardGreening(input) {

    let greeiningMeters = Number(input[0]);
    
    let priceForOneMeter = 7.61;
    let price = greeiningMeters * priceForOneMeter;
    let discount = price * 0.18;
    let totalPrice = price - discount;

    console.log(`The final price is: ${totalPrice} lv.
The discount is: ${discount} lv.`);

}

yardGreening(['550']);