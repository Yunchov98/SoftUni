function race(raceData) {
    const namePattern = /[A-Za-z]+/g;
    const distancePattern = /\d+/g;

    const racersArray = raceData.shift().split(', ');
    const racersObject = {};

    let line = raceData.shift();
    while (line !== 'end of race') {
        let totalDistance = 0;
        const currentName = line.match(namePattern).join('');
        const currentDistance = line.match(distancePattern).join('');

        for (const digt of currentDistance) {
            totalDistance += Number(digt);
        }

        if (racersArray.includes(currentName)) {
            if (!racersObject.hasOwnProperty(currentName)) {
                racersObject[currentName] = totalDistance;
            } else {
                racersObject[currentName] += totalDistance;
            }
        }

        line = raceData.shift();
    }

    const sortEntries = Object.entries(racersObject).sort((a, b) => b[1] - a[1]);

    const firstPlace = sortEntries[0][0];
    const secondPlace = sortEntries[1][0];
    const thirdPlace = sortEntries[2][0];

    console.log(`1st place: ${firstPlace}`);
    console.log(`2nd place: ${secondPlace}`);
    console.log(`3rd place: ${thirdPlace}`);
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
);
console.log('--------------');
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']
)