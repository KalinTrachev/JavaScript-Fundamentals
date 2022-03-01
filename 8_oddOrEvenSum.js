function oddOrEvenSum(x) {

    let arr = String(x).split('');
    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);
        if (num % 2 == 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }  
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);

}
oddOrEvenSum(1000435);