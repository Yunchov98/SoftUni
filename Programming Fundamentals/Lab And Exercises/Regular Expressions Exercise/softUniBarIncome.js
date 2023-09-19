function softUniBarIncome(input) {
    const pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>[\w]+)>[^|$%.]*\|(?<count>[0-9]+)\|[^|$%.0-9]*(?<price>[0-9]+[\.]*[0-9]+)\$/g;

    let totalIncome = 0;

    let line = input.shift();
    while (line !== 'end of shift') {
        let currentData = pattern.exec(line);

        if (currentData) {
            const customerName = currentData.groups.customer;
            const currentProduct = currentData.groups.product;
            const currentCount = Number(currentData.groups.count);
            const currentPrice = Number(currentData.groups.price);

            const totalPersonalBill = currentCount * currentPrice;
            totalIncome += totalPersonalBill;

            console.log(`${customerName}: ${currentProduct} - ${totalPersonalBill.toFixed(2)}`);

            currentData = pattern.exec(line);
            line = input.shift();
        } else {
            line = input.shift();
        }
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
);
console.log('------------------------------------');
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']
);