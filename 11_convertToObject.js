function convertToObj(objectAsString) {

    let parsedObject = JSON.parse(objectAsString);
    console.log(parsedObject);
    for (let key of Object.keys(parsedObject)) {
        console.log(`${key}: ${parsedObject[key]}`);
    }

}
let input = '{ "name": "George", "age": 40, "town": "Sofia"}';
convertToObj(input)