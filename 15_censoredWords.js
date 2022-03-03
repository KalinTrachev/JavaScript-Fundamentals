function censoredWords(text, word) {

    // let result = text.split(word).join('*'.repeat(word.length))

    
    let start = text.indexOf(word);
    while (start != -1) {
        let first = text.substring(0, start);
        let second = text.substring(start + word.length);
        text = first + '*'.repeat(word.length) + second;
        start = text.indexOf(word);
    }
    console.log(text);

}
censoredWords('A small sentence with some words', 'small')