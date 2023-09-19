function meetings(input) {
    const myObj = {};

    input.forEach(line => {
        let [day, name] = line.split(' ');

        if (myObj.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            myObj[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    });

    for (const day in myObj) {
        console.log(`${day} -> ${myObj[day]}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);