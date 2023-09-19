function timePlus15Minutes(input) {

    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    minutes += 15;

    if (minutes > 59) {
        minutes -= 60;
        hours += 1;
    }

    if (hours > 23) {
        hours -= 24
    }

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}

timePlus15Minutes(['12', '49']);