function meetings(input) {

    let meetingList = {};

    for (let line of input) {
        let tokens = line.split(' ');
        let day = tokens[0];
        let person = tokens[1];

        if (meetingList.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            console.log(`Scheduled for ${day}`);
            meetingList[day] = person;
        }
    }

    for (let key in meetingList) {
        console.log(`${key} -> ${meetingList[key]}`);
    }

}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])