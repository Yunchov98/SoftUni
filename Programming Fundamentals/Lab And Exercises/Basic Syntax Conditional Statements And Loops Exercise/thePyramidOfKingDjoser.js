function thePyramidOfKingDjoser(base, increment) {

    let totalStone = 0;
    let totalMarbel = 0;
    let totalLapis = 0;
    let totalGold = 0;
    let pyramidHeight = 0;
    let floor = 0;

    while (base > 1) {
        let totalBlocks = base * base * increment;
        let innerBlocks = ((base - 2) * (base - 2) * increment);
        let outerBlocks = totalBlocks - innerBlocks;

        if (base - 2 === 0) {
            break;
        }

        floor++;
        base -= 2;

        if (floor % 5 === 0) {
            totalLapis += outerBlocks;
            totalStone += innerBlocks;
        } else {
            totalMarbel += outerBlocks;
            totalStone += innerBlocks;
        }
    }

    floor++;
    pyramidHeight = Math.floor(floor * increment);
    totalGold += Math.ceil(base * base * increment);

    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarbel)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
    console.log(`Gold required: ${totalGold}`);
    console.log(`Final pyramid height: ${pyramidHeight}`);

}

thePyramidOfKingDjoser(11, 0.75);