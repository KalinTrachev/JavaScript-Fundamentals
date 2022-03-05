function equalSums(arr) {

    let isTrue = false;

    for (let i = 0; i < arr.length; i++) {


        let leftSum = 0;
        let rightSum = 0;

        if (i != 0) {
            for (let j = 0; j < i; j++) {
                leftSum += arr[j];
            }
        }
        if (i != arr.length - 1) {
            for (let r = i + 1; r < arr.length; r++) {
                rightSum += arr[r];
            }
        }

        if (leftSum == rightSum) {
            console.log(i);
            isTrue = true
            break;
        }
    }
    if (!isTrue) {
        console.log('no');
    }
}

equalSums([1])
