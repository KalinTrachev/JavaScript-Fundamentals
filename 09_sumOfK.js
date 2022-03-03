function sumOfK(n, k) {

    let arr = [1];

    for (i = 1; i < n; i++) {

        let sum = 0;
        let lastK = arr.slice(-k);

        for (let num of lastK) {
            sum += num;
        }
        arr.push(sum);
    }
    console.log(arr.join(' '));
}
sumOfK(6, 3)
