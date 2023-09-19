function storeCatalogue(info) {
    const catalogue = {};

    for (const line of info) {
        const [product, price] = line.split(' : ');
        catalogue[product] = price;
    }

    const sorted = Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0]));

    let firstLetter = '';
    for (const [product, price] of sorted) {
        if (product[0] !== firstLetter) {
            firstLetter = product[0];
            console.log(firstLetter);
        }

        console.log(`${product}: ${price}`);
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);