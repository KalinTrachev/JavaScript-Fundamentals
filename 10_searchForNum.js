function searchForNum(input, command) {

    let numsToTake = command[0];
    let numsToDelete = command[1];
    let searchedNum = command[2];

    let arr = input.slice(0, numsToTake);
    arr.splice(0, numsToDelete);
    let times = 0;
    while (arr.includes(searchedNum)) {
        times += 1;
        let index = arr.indexOf(searchedNum);
        arr.splice(index,1)
    }
    console.log(`Number ${searchedNum} occurs ${times} times.`);

}
searchForNum([5, 2, 3, 3, 1, 3],
    [5, 2, 3]
)