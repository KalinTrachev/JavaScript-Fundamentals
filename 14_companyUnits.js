function companyUnits(input) {

    let companies = {};
    for (line of input) {
        [company, unit] = line.split(' -> ');

        if (!companies.hasOwnProperty(company)) {
            companies[company] = new Set();
        }
        companies[company].add(unit);
    }

    let companyName = Object.keys(companies)
        .sort((a, b) => a.localeCompare(b));

    companyName.forEach(firm => {
        let unitList = Array.from(companies[firm]);
        console.log(firm);
        unitList.forEach(element => {
            console.log(`-- ${element}`)
        });
    });
}
companyUnits([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])