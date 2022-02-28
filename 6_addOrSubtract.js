function addOrSubtract(arr) {

    let originalSum = 0;

    for (let element of arr) {
        originalSum += element;
    }

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if (element % 2 == 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }

    }

    let sum = 0;

    for (let element of arr) {
        sum += element;
    }

    console.log(arr);
    console.log(originalSum);
    console.log(sum);
}

addOrSubtract([5, 15, 23, 56, 35])