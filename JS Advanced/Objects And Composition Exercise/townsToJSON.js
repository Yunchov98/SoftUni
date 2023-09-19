function townsToJSON(data) {
    const townsInfo = [];

    for (let i = 1; i < data.length; i++) {
        let [townName, latitude, longitude] = data[i]
            .split('|')
            .filter(x => x.length > 0)
            .map(x => x.trim());

        townsInfo.push({
            'Town': townName,
            'Latitude': Number(Number(latitude).toFixed(2)),
            'Longitude': Number(Number(longitude).toFixed(2)),
        });
    }

    return JSON.stringify(townsInfo);
}

console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));