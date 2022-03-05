function repeatStrings(string, n) {

    let result = '';

    for (let i = 1; i <= n; i++) {
        result += string
    }

    console.log(result);
}
repeatStrings('bla', 3);
