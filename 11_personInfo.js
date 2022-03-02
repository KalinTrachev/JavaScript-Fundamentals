function personInfo(firstName, lastName, age) {


    // опция 1
    
    // let person = {};
    // person.firstName = firstName;
    // person.lastName = lastName;
    // person.age = age;

    // опция 2

    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age,
    }

    // опция 3

    let person = {
        firstName,
        lastName,
        age
    }
    
    return person
}
console.log(personInfo("Peter",
    "Pan",
    "20"))