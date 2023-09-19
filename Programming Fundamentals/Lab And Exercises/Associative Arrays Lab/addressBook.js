function addressBook(input) {
    const addresses = {};

    for (const line of input) {
        let [name, address] = line.split(':');

        addresses[name] = address;
    }

    let entries = Object.entries(addresses);
    entries = entries.sort(([kvpA], [kvpB]) => kvpA.localeCompare(kvpB));

    entries.forEach(entry => {
        console.log(`${entry[0]} -> ${entry[1]}`);
    });
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);