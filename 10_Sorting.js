function sorting(arr) {

    let sorted = arr.sort((a, b) => b - a);
    let newArr = []

    // for (let i = 0; i < sorted.length / 2; i++) {

    while(sorted.length != 0){
        newArr.push(sorted[0]);
        sorted.shift();
        newArr.push(sorted[sorted.length - 1])
        sorted.pop();
    }
    console.log(newArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 43, 63, 31, 2, 18, 94])