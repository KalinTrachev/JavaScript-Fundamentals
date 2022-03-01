function arrayManipulations(input) {
    let numbers = input
        .shift()
        .split(' ')
        .map(Number);

    for (let i = 0; i < input.length; i++) {
        let [command, firstNum, secondNum] = input[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case 'Add': add(firstNum);
                break;
            case 'Remove': remove(firstNum);
                break;
            case 'RemoveAt': removeAt(firstNum);
                break;
            case 'Insert': insert(firstNum, secondNum);
                break;
        }
    }

    function add(element) {
        numbers.push(element);
    }
    function remove(number) {
        numbers = numbers.filter(element => element !== number);
    }
    function removeAt(index) {
        numbers.splice(index, 1);
    }
    function insert(num, index) {
        numbers.splice(index, 0, num)
    }

    return numbers.join(' ');
}

console.log(arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
))