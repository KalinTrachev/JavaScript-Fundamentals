function smallestOfThree(num1, num2, num3) {

    function smaller(x, y) {
        let small;
        if (x < y) {
            small = x;
        } else {
            small = y;
        }
        return small;
    }

    let smallest = Number.MAX_SAFE_INTEGER;

    smallest = smaller(num1, smallest);
    smallest = smaller(num2, smallest);
    smallest = smaller(num3, smallest);

    return smallest;
}
console.log(smallestOfThree(2, 5, 3));
