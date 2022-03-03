function studentGrades(input) {

    let studentList = {};

    for (let line of input) {

        let token = line.split(' ');
        let name = token.shift();
        let grades = token.map(Number);

        if (!studentList.hasOwnProperty(name)) {
            studentList[name] = [];
        }
        for (let grade of grades) {
            studentList[name].push(grade)
        }
    }
    sortedList = Object.entries(studentList);
    sortedList.sort(compare);

    function compare([nameA, gradesA], [nameB, gradesB]) {

        // let averageA = gradesA.reduce((a, b) => a + b, 0)/ gradesA.length;
        // let averageB = gradesB.reduce((a, b) => a + b, 0)/ gradesB.length;

        return nameA.localeCompare(nameB);
    }

    for (let token of sortedList) {

        let name = token[0];
        let gradesOf = token[1];
        let averageGrade = gradesOf.reduce((a, b) => a + b, 0) / gradesOf.length;
        console.log(`${name}: ${averageGrade.toFixed(2)}`);
    }
}


studentGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)