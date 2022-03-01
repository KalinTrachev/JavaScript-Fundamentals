function bombNumbers(input, bomb) {

    let bombNum = bomb[0];
    let power = bomb[1];
    while (input.includes(bombNum)) {

        let bombIndex = input.indexOf(bombNum);
        let startIndex = bombIndex - power;
        let deleteCount = (power * 2) + 1;
        if (startIndex < 0) {
            deleteCount = (power * 2) + 1 + startIndex;
            startIndex = 0;
        }
        input.splice(startIndex, deleteCount);
    }
    console.log(input.reduce((a, b) => a + b));
}
bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
)