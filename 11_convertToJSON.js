function convertToJSON(name, lastName, hairColor) {

    let person = {
        name,
        lastName,
        hairColor
    };
    console.log(person);
    let asString = JSON.stringify(person);
    console.log(asString);

}
convertToJSON('George',
    'Jones',
    'Brown'
)