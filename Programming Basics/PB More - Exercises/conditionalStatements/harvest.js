function harvest(input) {

    let area = Number(input[0]);
    let grapeForOneKm = Number(input[1]);
    let wineLitersNeeded = Number(input[2]);
    let workersCount = Number(input[3]);

    let totalGrape = area * grapeForOneKm;
    let wineLiters = 0.4 * totalGrape / 2.5;

    if (wineLiters >= wineLitersNeeded) {
        let totalWine = wineLiters - wineLitersNeeded;
        let wineForWorkers = totalWine / workersCount;

        console.log(`Good harvest this year! Total wine: ${Math.floor(wineLiters)} liters.`);
        console.log(`${Math.ceil(totalWine)} liters left -> ${Math.ceil(wineForWorkers)} liters per person.`)
    } else {
        let wineNeeded = wineLitersNeeded - wineLiters;
        console.log(`It will be a tough winter! More ${Math.floor(wineNeeded)} liters wine needed.`);
    }
}

harvest(['650', '2', '175', '3']);