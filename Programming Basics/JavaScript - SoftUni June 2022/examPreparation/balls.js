function balls(input) {

    let index = 0;

    let ballsCount = Number(input[index]);
    index++;

    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let blackBalls = 0;
    let otherBalls = 0;
    let points = 0;

    for (let i = 0; i < ballsCount; i++) {
        let ballsColor = input[index];
        index++;

        switch (ballsColor) {
            case 'red':
                redBalls++;
                points += 5;
                break;
            case 'orange':
                orangeBalls++;
                points += 10;
                break;
            case 'yellow':
                yellowBalls++;
                points += 15;
                break;
            case 'white':
                whiteBalls++;
                points += 20;
                break;
            case 'black':
                blackBalls++;
                points /= 2;
                break;
            default:
                otherBalls++;
                break;
        }
    }
    console.log(`Total points: ${Math.floor(points)}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherBalls}`);
    console.log(`Divides from black balls: ${blackBalls}`);

}

balls(["3",
    "white",
    "black",
    "pink"])
    ;