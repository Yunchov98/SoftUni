function argumentInfo() {
    const obj = {};

    Array
        .from(arguments)
        .forEach(argument => {
            const type = typeof argument;
            console.log(`${type}: ${argument}`);

            if (!obj[type]) {
                obj[type] = 0;
            }

            obj[type]++;
        });

    Object
        .keys(obj)
        .sort((a, b) => obj[b] - obj[a])
        .forEach(el => {
            console.log(`${el} = ${obj[el]}`);
        });
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });