function wordsTracker(input) {

    let words = input.shift().split(' ');
    let wordsObject = {};

    for (let word of words) {
        wordsObject[word] = 0;

    }

    for (line of input) {

        if (wordsObject.hasOwnProperty(line)) {
            wordsObject[line]++;
        }
    }

    let sortedList = Object.entries(wordsObject).sort((a, b) => b[1] - a[1]);

    // let compare = ((a, b) => a[1] - b[1])
     

    sortedList.forEach(element => {
        console.log(`${element[0]} - ${element[1]}`)
    });
    
}
wordsTracker(
    ['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
        , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']
)