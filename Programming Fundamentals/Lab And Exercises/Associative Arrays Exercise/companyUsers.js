function companyUsers(input) {
    const result = {};

    input.forEach(line => {
        const [companyName, employeeId] = line.split(' -> ');

        if (!result.hasOwnProperty(companyName)) {
            result[companyName] = new Set();
        }
        result[companyName].add(employeeId);
    });

    const sortedEntries = Object.entries(result).sort(([companyA], [companyB]) => companyA.localeCompare(companyB));
    for (const [companyName, employeeId] of sortedEntries) {
        console.log(companyName);
        employeeId.forEach(employee => console.log(`-- ${employee}`));
    }
}

companyUsers(
    [
        'SoftUni -> AA12345',
        'SoftUni -> BB12345',
        'Microsoft -> CC12345',
        'HP -> BB12345'
    ]
);