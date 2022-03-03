function storage(input) {

    let storageList = {};

    for (let line of input) {

        let [item, qty] = line.split(' ');
        qty = Number(qty);
        if (storageList.hasOwnProperty(item)) {
            storageList[item] += qty;
        } else {
            storageList[item] = qty;
        }
    }
    for (let key in storageList){
        console.log(`${key} -> ${storageList[key]}`)
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)