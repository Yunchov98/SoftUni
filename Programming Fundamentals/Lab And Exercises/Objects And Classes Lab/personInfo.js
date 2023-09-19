function personInfo(firstName, lastName, age) {
    
    let personalInformation = {
        firstName: firstName,
        lastName: lastName,
        age: Number(age),
    }

    return personalInformation;
}

personInfo("Peter", "Pan", "20");