function factorialDivision(a, b) {

    function factorial(n) {

        let sum = 1
        while (n > 0) {

            sum *= n;
            n--;
        }
        return sum;
    }


    console.log(`${(factorial(a) / factorial(b)).toFixed(2)}`);

}
factorialDivision(6, 2)