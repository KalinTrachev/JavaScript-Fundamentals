function employees(input) {

    let employees = [];

    // for (let person of input) {
    //     employees[person] = person.length;
    // }
    // Object.entries(employees).forEach(element => {
    //     console.log(`Name: ${element[0]} -- Personal Number: ${element[1]}`);
    // });

    input.forEach(element => {
        let person = {
            name: element,
            number: element.length
        }

        employees.push(person);
    }
    )
    // console.log(employees);
    employees.forEach(obj => {
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.number}`);
    });
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)