function pow(a, b) {
    let num = 1;

    for (let i = 1; i <= b; i++) {
        num = num * a;
    }
    console.log(num);
}
pow(8, 2);