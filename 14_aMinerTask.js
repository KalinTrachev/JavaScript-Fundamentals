function aMinerTask(input) {

    let units = {};
    for (let index = 0; index < input.length; index += 2) {
        let unit = input[index];
        let quantity = Number(input[index + 1]);
        if (!units.hasOwnProperty(unit)) {
            units[unit] = 0;
        }
        units[unit] += quantity;
    }
    for (let key in units) {
        console.log(`${key} -> ${units[key]}`);
    }

}
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]
)