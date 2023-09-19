function trainingLab(input) {

    let w = Number(input[0]);
    let h = Number(input[1]) - 1;

    let rowDesk = (h - h % 0.7) / 0.7;
    let columnDesk = (w - w % 1.2) / 1.2;

    let numberOfPlace = rowDesk * columnDesk - 3;

    console.log(numberOfPlace);

}

trainingLab(['15', '8.9']);