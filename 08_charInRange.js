function charInRange(a, b) {

    let firstLetter = a.charCodeAt(0);
    let secondLetter = b.charCodeAt(0);

    let start = firstLetter < secondLetter ? firstLetter : secondLetter;
    let end = firstLetter > secondLetter ? firstLetter : secondLetter;
    let line = ''

    for (let i = start + 1; i < end; i++) {
        line += String.fromCharCode(i) + ' ';

    }
    return line;
}
console.log(charInRange('C', '#'));
