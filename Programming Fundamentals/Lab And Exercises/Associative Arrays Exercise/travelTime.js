function travelTime(input) {
    const result = {};

    input.forEach(line => {
        let [country, town, price] = line.split(' > ');
        price = Number(price);

        if (!result.hasOwnProperty(country)) {
            result[country] = {};
        }

        if (!result[country].hasOwnProperty(town)) {
            result[country][town] = Number.MAX_SAFE_INTEGER;
        }

        if (result[country].hasOwnProperty(town)) {
            if (result[country][town] > price) {
                result[country][town] = price;
            }
        }
    });

    const sortedCountries = Object.keys(result).sort((a, b) => a.localeCompare(b));
    for (const country of sortedCountries) {
        let buff = '';
        buff += `${country} -> `;

        const sortedPrice = Object.keys(result[country]).sort((a, b) => result[country][a] - result[country][b]);

        for (const price of sortedPrice) {
            buff += `${price} -> `;
            buff += `${result[country][price]} `;
        }

        console.log(buff);
    }
}

travelTime(
    [
        "Bulgaria > Sofia > 500",
        "Bulgaria > Sopot > 800",
        "France > Paris > 2000",
        "Albania > Tirana > 1000",
        "Bulgaria > Sofia > 200"
    ]
);
console.log(('-----------'));
travelTime(
    [
        'Bulgaria > Sofia > 25000',
        'Bulgaria > Sofia > 25000',
        'Kalimdor > Orgrimar > 25000',
        'Albania > Tirana > 25000',
        'Bulgaria > Varna > 25010',
        'Bulgaria > Lukovit > 10'
    ]
)