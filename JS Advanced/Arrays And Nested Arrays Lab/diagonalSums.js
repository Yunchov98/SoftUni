function diagonalSums(matrix) {
    let sumOfFirstDiagonal = 0;
    let sumOfSecondDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        sumOfFirstDiagonal += matrix[i][i];
        sumOfSecondDiagonal += matrix[i][matrix.length - 1 - i];
    }

    console.log(`${sumOfFirstDiagonal} ${sumOfSecondDiagonal}`);
}

diagonalSums([
    [20, 40],
    [10, 60]
]);
diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);