function convertToJSON(firstName, lastName, hairColor) {

    let personInformation = {
        name: firstName,
        lastName,
        hairColor,
    }

    let convertToJSON = JSON.stringify(personInformation);

    console.log(convertToJSON);
}

convertToJSON('George', 'Jones', 'Brown');