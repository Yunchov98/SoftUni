function housePainting(input) {

    let houseHeight = Number(input[0]);
    let lengthOfSideWall = Number(input[1]);
    let heightOfTriangleWall = Number(input[2]);

    let sideWallArea = houseHeight * lengthOfSideWall;
    let windowArea = 1.5 * 1.5;
    let bothSidesArea = 2 * sideWallArea - 2 * windowArea;
    let backWall = houseHeight * houseHeight;
    let entrance = 1.2 * 2;
    let frontAndBackSide = 2 * backWall - entrance;
    let totalArea = bothSidesArea + frontAndBackSide;
    let greenPaint = totalArea / 3.4;

    let twoRectangelsOnTheRoof = 2 * (houseHeight * lengthOfSideWall)
    let twoTriangelsOnTheRoof = 2 * (houseHeight * heightOfTriangleWall / 2);
    let totalAreaOfTheRoof = twoRectangelsOnTheRoof + twoTriangelsOnTheRoof;
    let redPaint = totalAreaOfTheRoof / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}

housePainting(['6', '10', '5.2']);