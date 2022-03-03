function cardGame(input) {

    let list = {};
    for (let line of input) {
        [name, cards] = line.split(': ');
        cards = cards.split(', ')

        if (!list.hasOwnProperty(name)) {
            list[name] = [];
        }
        list[name].push(...cards)
    }

    let cardSuit = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }
    let cardStrenght = {
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }

    let playersCards = Object.entries(list);

    for (let [player, cards] of playersCards) {
        cards = Array.from(new Set(cards));
        list[player] = cards;
        let sum = 0;
        for (let line of cards) {
            lineArr = Array.from(line)
            let suit = lineArr.pop();
            suit = cardSuit[suit];
            let strenght = lineArr.join('');
            if (isNaN(Number(strenght))) {
                strenght = cardStrenght[strenght]
            }
            sum += strenght * suit
        }
        console.log(`${player}: ${sum}`)
    }

}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
)