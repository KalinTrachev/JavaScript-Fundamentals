function partyTime(input) {

    let list = {
        vip: [],
        regular: [],
    }

    let name = input.shift();
    while (name !== 'PARTY') {
        let firstChar = name[0]
        if (isNaN(firstChar)) {
            list.regular.push(name)
        } else {
            list.vip.push(name)
        }
        name = input.shift()
    }
    for (let line of input) {
        if (list.vip.includes(line)) {
            let index = list.vip.indexOf(line);
            list.vip.splice(index, 1);
        } else if (list.regular.includes(line)) {
            let index = list.regular.indexOf(line);
            list.regular.splice(index, 1);
        }
    }
    console.log(list.regular.length + list.vip.length);
    console.log(list.vip.join('\n'));
    console.log(list.regular.join('\n'));
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
)