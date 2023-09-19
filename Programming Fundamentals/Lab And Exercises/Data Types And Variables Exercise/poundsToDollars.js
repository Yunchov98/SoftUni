function poundsToDollars(dollars) {

    const britishPound = 1.31;
    let poundsInDollars = dollars * britishPound;

    console.log(poundsInDollars.toFixed(3));

}

poundsToDollars(80);