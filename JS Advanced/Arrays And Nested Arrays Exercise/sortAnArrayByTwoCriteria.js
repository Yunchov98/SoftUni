function sortAnArrayByTwoCriteria(array) {
    array.sort((a, b) => a.length - b.length || a.localeCompare(b));

    // array.forEach(element => {
    //     console.log(element);
    // });

    console.log(array.join('\n'));
}

sortAnArrayByTwoCriteria(['alpha',
    'beta',
    'gamma']
);
console.log('------------------------');
sortAnArrayByTwoCriteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
);
console.log('------------------------');
sortAnArrayByTwoCriteria(['test',
    'Deny',
    'omen',
    'Default']
);
console.log('------------------------');