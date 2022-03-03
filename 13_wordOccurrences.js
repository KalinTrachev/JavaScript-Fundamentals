function wordOccurrences(input) {

    /* 
    for loop to iterate all the words
    store them in object
    if there is -> value ++
    if there is not -> push it
    sort the object 
    print

    */

    let list = {};
    for (line of input) {
        if (list.hasOwnProperty(line)) {
            list[line]++;
        } else {
            list[line] = 1;
        }
    }

    let sortedList = Object.entries(list)
    sortedList.sort(compare)

    function compare([wordA, timesA], [wordB, timesB]) {
        // timesA = Number(timesA);
        // timesB = Number(timesB);
        return timesB - timesA;
    }
    
    sortedList.forEach(element => {
        console.log(`${element[0]} -> ${element[1]} times`);
    });
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])