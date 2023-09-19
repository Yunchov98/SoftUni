function aMinerTask(input) {
    const result = {};

    for (let i = 0; i < input.length; i += 2) {
        const resource = input[i]
        const quantity = Number(input[i + 1]);

        if (!result.hasOwnProperty(resource)) {
            result[resource] = 0;
        }
        result[resource] += quantity;
    }

    for (const product in result) {
        console.log(`${product} -> ${result[product]}`);
    }
}

aMinerTask(
    [
        'Gold',
        '155',
        'Silver',
        '10',
        'Copper',
        '17'
    ]
);