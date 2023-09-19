function basketballEquipment(input) {

    let feeForOneYear = Number(input[0]);

    let basketballSneakers = feeForOneYear - (feeForOneYear * 40 / 100);
    let basketballOutfit = basketballSneakers - (basketballSneakers * 20 / 100);
    let basketballBall = basketballOutfit * 0.25;
    let basketballAccessories = basketballBall * 0.20;

    let totalPrice = feeForOneYear + basketballSneakers + basketballOutfit + basketballBall + basketballAccessories;
    console.log(totalPrice);

}

basketballEquipment(['365']);