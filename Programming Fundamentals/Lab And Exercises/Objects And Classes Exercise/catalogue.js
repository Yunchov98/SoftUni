function catalogue(list) {

    const myArr = [];

    list.forEach(line => {
        let [name, price] = line.split(' : ');
        const currentProduct = {
            product: name,
            price: Number(price),
        }
        myArr.push(currentProduct);
    });

    myArr.sort((a, b) => a.product.localeCompare(b.product));

    let firstLetter = '';
    for (const element of myArr) {
        if (element.product.charAt(0) === firstLetter) {
            console.log(`  ${element.product}: ${element.price}`);
        } else {
            firstLetter = element.product.charAt(0);
            console.log(firstLetter);
            console.log(`  ${element.product}: ${element.price}`);
        }
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
);