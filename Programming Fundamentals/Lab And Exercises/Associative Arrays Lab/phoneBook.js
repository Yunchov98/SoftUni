function phoneBook(input) {
    const phones = {};

    input.forEach(line => {
        let [name, phone] = line.split(' ');

        phones[name] = phone;
    });

    for (const phone in phones) {
        console.log(`${phone} -> ${phones[phone]}`);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);