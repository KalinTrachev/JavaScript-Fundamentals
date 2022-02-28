function maxSeqOfNumbers(arr) {
    let maxSeq = [];

    for (let i = 0; i < arr.length; i++) {
        let currentSeq = [arr[i]];
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] === arr[j]) {
                currentSeq.push(arr[j])
            } else {
                break;
            }
        }
        
        if (maxSeq.length < currentSeq.length) {
            maxSeq = currentSeq
        }
    }
    console.log((maxSeq.join(' ')));
}
maxSeqOfNumbers([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])