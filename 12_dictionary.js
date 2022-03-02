function dictionary(input) {

    let words = {};

    for (let token of input) {
        // парсваме input-а
        let word = JSON.parse(token);
        words = Object.assign(words, word);
        // Пълним обекта. Все едно имаме words.push(word). Няма нужда да го пишем обаче, защото
        // Object.assign слива два обекта, като подменя, ако се повтарят value-тата.
    }


    // сортираме азбучно
    let alphabetWords = Object.keys(words).sort((a, b) => a.localeCompare(b))
    // Не правим нов голям обект с обекти. Просто за подредените keys в alphabetWords взимаме съответните value-та и принтираме.
    alphabetWords.forEach(term => {
        let definition = words[term];
        console.log(`Term: ${term} => Definition: ${definition}`);
    })


}
dictionary(
    [
        '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
        '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."}',
        '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."}',
        '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."}',
        '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."}'
    ]
)