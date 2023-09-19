function makeADictionary(array) {

    const dictionary = {};
    const finalArray = [];

    array.forEach(line => {
        let convert = JSON.parse(line);

        for (const key in convert) {
            dictionary[key] = convert[key];
        }
    });

    for (const key in dictionary) {
        finalArray.push(`Term: ${key} => Definition: ${dictionary[key]}`);
    }

    const sorted = finalArray.sort((a, b) => a.localeCompare(b));

    sorted.forEach(term => {
        console.log(term);
    });
}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
);