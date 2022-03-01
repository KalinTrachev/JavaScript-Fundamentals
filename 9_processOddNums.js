function processOddNum(arr) {

    // let filtered = arr.filter(isOddIndex);

    // function isOddIndex(value, index) {
    //     return (index % 2) == 1;
    // }

    // let doubled = filtered.map(x => x * 2);

    // console.log(doubled.reverse());


    let newArr = [];
    for (i = 1; i < arr.length; i++) {
        let oddIndex = arr[i];
        if (i % 2 == 1){
        newArr.unshift(oddIndex);
        }
    }

    let doubled = newArr.map(x => x * 2);
    
console.log(doubled.join(' '));

}
processOddNum([10, 15, 20, 25])