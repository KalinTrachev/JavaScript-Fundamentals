function piccolo(input) {

    let parking = {};

    for (let line of input) {

        let [direction, car] = line.split(', ')

        if (direction == 'IN') {
            parking[car] = 1;
        } else if (direction == 'OUT') {
            parking[car] = 0;
        }
    }

    let carsIn = Object.keys(parking)
        .filter(x => parking[x] == 1)
        .sort((a, b) => a.localeCompare(b))
        .join('\n')
    console.log(carsIn);

}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)