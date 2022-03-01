function NxN(n) {

    for (let j = 1; j <= n; j++) {

        let line = [];
        for (let i = 1; i <= n; i++) {
            line.push(`${n}`)
        }
        console.log(line.join(' '));
    }
}
NxN(5)