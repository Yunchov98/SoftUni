function inventory(heroData) {

    const allHeroes = [];

    heroData.forEach(line => {
        let [name, level, items] = line.split(' / ');

        const currentHero = {
            name,
            level: Number(level),
            items,
        }

        allHeroes.push(currentHero);
    });

    const sortedHeroes = allHeroes.sort((a, b) => a.level - b.level);

    sortedHeroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    });
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);