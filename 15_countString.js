function countString(text, word) {

    let matcher = ` ${word} `;
    text = ` ${text} `
        let count = 0;
    let index = text.indexOf(matcher);

    while (index != -1) {
        count++;
        index = text.indexOf(matcher, index + 1);

    }
    console.log(count);

}
countString('softuni is great place for learning new programming languages',
    'softuni')