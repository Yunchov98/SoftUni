function tennisEquipment(input) {

    let tennisRocketPrice = Number(input[0]);
    let tennisRocketsCount = Number(input[1]);
    let shoesCount = Number(input[2]);

    let shoesPrice = tennisRocketPrice / 6;

    let totalShoesPrice = shoesCount * shoesPrice;
    let totalTennisRocketsPrice = tennisRocketPrice * tennisRocketsCount;
    let priceForShoesAndRockets = totalShoesPrice + totalTennisRocketsPrice;
    let otherEquipmentPrice = priceForShoesAndRockets * 0.20;
    let totalPrice = priceForShoesAndRockets + otherEquipmentPrice;

    let priceForDjokovic = totalPrice / 8;
    let priceForSponsors = totalPrice * 7 / 8;

    console.log(`Price to be paid by Djokovic ${Math.floor(priceForDjokovic)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(priceForSponsors)}`);

}

tennisEquipment(['850', '4', '2']);