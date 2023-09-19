function heroicInventory(data) {
    const result = [];


    data.forEach(line => {
        const [heroName, level, items] = line.split(' / ');

        const heroInfo = {
            name: heroName,
            level: Number(level),
            items: items ? items.split(', ') : [],
        };

        result.push(heroInfo);
    });

    return JSON.stringify(result);
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));