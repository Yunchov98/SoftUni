function login(input) {

    let index = 0;

    let username = input[index];
    index++;
    let command = input[index];
    index++;

    let password = username.split('').reverse('').join('');

    let counter = 0;

    while (command !== password) {

        counter++;

        if (counter === 4) {
            console.log(`User ${username} blocked!`);
            return;
        } else {
            console.log('Incorrect password. Try again.');
        }

        command = input[index];
        index++;
    }

    if (command === password) {
        console.log(`User ${username} logged in.`);
    }

}

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);