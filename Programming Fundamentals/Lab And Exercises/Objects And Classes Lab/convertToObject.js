function convertToObject(json) {

    let convertToObject = JSON.parse(json);
    
    for (let key of Object.keys(convertToObject)) {
        console.log(`${key}: ${convertToObject[key]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');