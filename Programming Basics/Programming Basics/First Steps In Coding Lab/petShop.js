function petShop(input) {

    let dogPackageCount = Number(input[0]);
    let catPackageCount = Number(input[1]);

    let onePackageDogsFood = 2.50;
    let onePackageCatsFood = 4;

    let totalPriceForDogs = dogPackageCount * onePackageDogsFood;
    let totalPriceForCats = catPackageCount * onePackageCatsFood;

    console.log(`${totalPriceForDogs + totalPriceForCats} lv.`);

}

petShop(['5', '4']);