function fishland(input) {

    let priceForOneKiloMackerel = Number(input[0]);
    let priceForOneKiloSprat = Number(input[1]);
    let bonitoKilos = Number(input[2]);
    let scadKilos = Number(input[3]);
    let musselsKilos = Number(input[4]);

    let bonitoPrice = priceForOneKiloMackerel + (priceForOneKiloMackerel * 60 / 100);
    let scadPrice = priceForOneKiloSprat + (priceForOneKiloSprat * 80 / 100);

    let totalPriceForBonitos = bonitoPrice * bonitoKilos;
    let totalPriceForScads = scadPrice * scadKilos;
    let totalPriceForMussels = musselsKilos * 7.50;

    let total = (totalPriceForBonitos + totalPriceForScads + totalPriceForMussels).toFixed(2);
    console.log(total);
}

fishland(['6.90', '4.20', '1.5', '2.5', '1']);