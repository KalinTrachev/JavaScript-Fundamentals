function inventory(input) {

    let heroes = [];

    for (const line of input) {

        let hero = {};
        [name, level, ...items] = line.split(' / ');
        // items = items
        //     .split(', ')
        //     .sort((a, b) => a.localeCompare(b))
        //     .join(', ')
        hero.name = name;
        hero.level = Number(level);
        hero.items = items;
        heroes.push(hero);

    }

    heroes = heroes.sort((a, b) => a.level - b.level);
    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    })

}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)