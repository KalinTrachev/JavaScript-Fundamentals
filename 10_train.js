function train(arr) {

    let wagons = arr
        .shift()
        .split(' ')
        .map(Number);

    let capacity = Number(arr.shift());

    for (let command of arr) {
        if (command.includes('Add')) {
            newWagon = command.split(' ')[1];
            wagons.push(newWagon);
        } else {
            passangers = Number(command)
            for (let i = 0; i < wagons.length; i++) {
                let wagonToGo = wagons[i];
                if (wagonToGo + passangers <= capacity) {
                    wagons[i] += passangers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)