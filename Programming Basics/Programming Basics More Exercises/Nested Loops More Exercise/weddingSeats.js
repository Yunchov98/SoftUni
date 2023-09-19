function weddingSeats(input) {

    let lastSector = input[0];
    let rowsCountInFirstSector = Number(input[1]);
    let oddRowPlaces = Number(input[2]);

    let firstSector = 'A';
    let rowsNumber = 'a'.charCodeAt(0);
    let totalSeats = 0;

    for (let i = firstSector.charCodeAt(0); i <= lastSector.charCodeAt(0); i++) {
        for (let row = 1; row <= rowsCountInFirstSector; row++) {
            if (row % 2 !== 0) {
                for (let y = rowsNumber; y < rowsNumber + oddRowPlaces; y++) {
                    let currentLetter = String.fromCharCode(i);
                    let currnetSmallLetter = String.fromCharCode(y);
                    console.log(`${currentLetter}${row}${currnetSmallLetter}`);
                    totalSeats++;
                }
            } else {
                for (let z = rowsNumber; z < rowsNumber + oddRowPlaces + 2; z++) {
                    let currentLetter = String.fromCharCode(i);
                    let currentSmallLetter = String.fromCharCode(z);
                    console.log(`${currentLetter}${row}${currentSmallLetter}`);
                    totalSeats++;
                }
            }
        }
        rowsCountInFirstSector++;
    }

    console.log(totalSeats);

}

weddingSeats(['B', '3', '2']);