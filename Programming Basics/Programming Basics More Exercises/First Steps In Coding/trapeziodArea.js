function trapeziodArea(input) {

    let bOne = Number(input[0]);
    let bTwo = Number(input[1]);
    let h = Number(input[2]);

    let area = (bOne + bTwo) * h / 2;

    console.log(area.toFixed(2));
}

trapeziodArea(['8', '13', '7']);