function city(cityInformation) {

    for (let key of Object.keys(cityInformation)) {
        console.log(`${key} -> ${cityInformation[key]}`);
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);