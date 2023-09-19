function footballLeague(input) {

    let index = 0;

    let stadiumVolume = Number(input[index]);
    index++;

    let fansCount = Number(input[index]);
    index++;

    let fansInSectorACounter = 0;
    let fansInSectorBCounter = 0;
    let fansInSectorGCounter = 0;
    let fansInSectorVCounter = 0;

    for (let sector = 0; sector < fansCount; sector++) {
        let currentSector = input[index];
        index++;
            switch (currentSector) {
                case 'A': fansInSectorACounter++; break;
                case 'B': fansInSectorBCounter++; break;
                case 'G': fansInSectorGCounter++; break;
                case 'V': fansInSectorVCounter++; break;
            }
    }

    let fansInSectorAInPercent = fansInSectorACounter / fansCount * 100;
    let fansInSectorBInPercent = fansInSectorBCounter / fansCount * 100;
    let fansInSectorGInPercent = fansInSectorGCounter / fansCount * 100;
    let fansInSectorVInPercent = fansInSectorVCounter / fansCount * 100;
    let totalFansInPercent = fansCount / stadiumVolume * 100;

    console.log(`${fansInSectorAInPercent.toFixed(2)}%`);
    console.log(`${fansInSectorBInPercent.toFixed(2)}%`);
    console.log(`${fansInSectorVInPercent.toFixed(2)}%`);
    console.log(`${fansInSectorGInPercent.toFixed(2)}%`);
    console.log(`${totalFansInPercent.toFixed(2)}%`);

}

footballLeague(['76', '10', 'A', 'V', 'V', 'V', 'G', 'B', 'A', 'V', 'B', 'B']);