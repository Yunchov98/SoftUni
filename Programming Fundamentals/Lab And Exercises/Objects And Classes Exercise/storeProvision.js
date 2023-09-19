function storeProvision(stocksInTheStore, productsForDelivery) {

    const totalProducts = {};
    const stocksInTheStoreLength = stocksInTheStore.length;
    const productsForDeliveryLength = productsForDelivery.length;

    for (let i = 0; i < stocksInTheStoreLength; i += 2) {
        totalProducts[stocksInTheStore[i]] = Number(stocksInTheStore[i + 1]);
    }

    for (let k = 0; k < productsForDeliveryLength; k += 2) {
        if (!totalProducts.hasOwnProperty(productsForDelivery[k])) {
            totalProducts[productsForDelivery[k]] = 0;
        }
        totalProducts[productsForDelivery[k]] += Number(productsForDelivery[k + 1]);
    }

    for (const currentProduct in totalProducts) {
        console.log(`${currentProduct} -> ${totalProducts[currentProduct]}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);