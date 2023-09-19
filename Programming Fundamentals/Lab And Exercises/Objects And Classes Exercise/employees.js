function employees(list) {

    let personInformation = {};

    list.forEach(person => {
        personInformation[person] = person.length;
    });

    for (const person in personInformation) {
        console.log(`Name: ${person} -- Personal Number: ${personInformation[person]}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);