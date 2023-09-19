function furniture(input) {
    const pattern = />>(?<product>[A-Za-z]+)<<(?<price>\d+[\.]*\d+)!(?<quantity>[\d]+)/g;

    let totalIncome = 0;

    console.log('Bought furniture:');

    let index = 0;
    while (input[index] !== 'Purchase') {
        let productData = pattern.exec(input[index]);

        if (productData) {
            const currentProduct = productData.groups.product;
            const currentPrice = Number(productData.groups.price);
            const currentCount = Number(productData.groups.quantity);

            console.log(currentProduct);

            const currentProductPrice = currentPrice * currentCount;
            totalIncome += currentProductPrice;

            productData = pattern.exec(input[index]);
        }

        index++;
    }

    console.log(`Total money spend: ${totalIncome.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
);
console.log('----------------------');
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']
)