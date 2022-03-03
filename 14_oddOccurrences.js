function oddOccurrences(input) {

    let arr = input
        .toLowerCase()
        .split(' ');
    let list = new Map();

    for (line of arr) {
        if (!list.has(line)) {
            list.set(line, 0);
        }
        list.set(line, list.get(line) + 1)
    }

    let sortedList = Array.from(list.keys())
        .filter(x => (list.get(x) % 2 !== 0))
        .join(' ')


    console.log(sortedList);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')