function addressBook(input) {

    let list = {};

    for (let line of input) {
        let [name, address] = line.split(':');
        list[name] = address;
    }

    let sortedList = Object.entries(list);

    sortedList.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, address] of sortedList){
        console.log(`${name} -> ${address}`);
    }
}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)