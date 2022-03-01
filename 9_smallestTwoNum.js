function smallestTwoNum(arr){

    let sortedArr = arr.sort((a, b) => a - b);

    let smallest = sortedArr.slice(0, 2);

    console.log(smallest.join(' '));


}
smallestTwoNum([3, 0, 10, 4, 7, 3])