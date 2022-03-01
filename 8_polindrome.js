function polindrome(arr) {

    let isEqual;

    for (let i = 0; i < arr.length; i++) {

        let arrNum = String(arr[i]).split('');

        for (let j = 0; j <= parseInt(arrNum.length / 2); j++) {
            if (arrNum[j] == arrNum[(arrNum.length - (1 + j))]) {
                isEqual = true;
            } else {
                isEqual = false;
                break;
            }

        }

        if (isEqual == true) {
            console.log(true);
        } else {
            console.log(false);

        }
    }
}
polindrome([123, 2, 232, 1010])