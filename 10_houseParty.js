function houseParty(arr) {

    let list = [];

    for (let command of arr) {
        command = command.split(' ');
        let name = command[0];
        if (command.includes('not')) {
            if (list.includes(name) === true) {
                list = list.filter(x => x !== name)
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (list.includes(name) === true) {
                console.log(`${name} is already in the list!`);
            } else {
                list.push(name)
            }
        }
    }
    console.log(list.join('\n'));
}
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
)