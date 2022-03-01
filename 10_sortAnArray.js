function sortAnArray(input) {

    // let alphabeticalArr = input.sort();
    // let result = alphabeticalArr.sort((a, b) => a.length - b.length);

    // console.log(result.join('\n'))

    const twoCriteriaSort = (cur, next) =>
        (cur.length - next.length || cur.localeCompare(next))

    input.sort(twoCriteriaSort);
    console.log(input.join('\n'));
}
sortAnArray(["Isacc", "Theodor", "Jack", 'James', 'Kolio', "Harrison", "George"])