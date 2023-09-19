function challengeTheWedding(input) {

    let menCount = Number(input[0]);
    let womenCount = Number(input[1]);
    let freeSpace = Number(input[2]);

    let buff = '';
    let isFull = false;

    for (let i = 1; i <= menCount; i++) {
        for (let y = 1; y <= womenCount; y++) {
            freeSpace --;
            buff += `(${i} <-> ${y}) `
            if (freeSpace <= 0) {
                isFull = true;
                break;
            }
        }
        if(isFull){
            break;
        }
    }

    console.log(buff);

}

challengeTheWedding(['2', '2', '3']);