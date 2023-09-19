function storage(input) {
    const map = new Map();

    input.forEach(line => {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);

        if (!map.has(product)) {
            map.set(product, quantity);
        } else {
            const currentQuantity = map.get(product);
            const newQuantity = currentQuantity + quantity;
            map.set(product, newQuantity);
        }
    });

    for (const [product, quantity] of map) {
        console.log(`${product} -> ${quantity}`);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);