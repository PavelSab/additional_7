module.exports = function solveSudoku(matrix) {
//backtacking algorithm
let run = function() {
    let matrixRow = 0, matrixColumn = 0;
    let isEmpty = false;
    for (let i = 0; i < 9 && !isEmpty; i++) {
    for (let j = 0; j < 9 && !isEmpty; j++) {
    if (matrix[i][j] === 0) {
    isEmpty = true;
    matrixRow = i;
    matrixColumn = j;
    }
    }
    }
    if (!isEmpty) {return true;}
    for (let n = 1; n < 10; n++){
    if (checkNumber(matrixRow,matrixColumn,n)) {
    matrix[matrixRow][matrixColumn] = n;
    if (run()) {return true;}
    matrix[matrixRow][matrixColumn] = 0;
    }
    }
    return false;
    }
    let checkNumber = function(matrixRow,matrixColumn,n) {
    for (let j = 0; j < 9; j++) {
    if (matrix[matrixRow][j] === n) {return false;}
    }
    for (let i = 0; i < 9; i++) {
    if (matrix[i][matrixColumn] === n) {return false;}
    }
    let boxRow = matrixRow - matrixRow%3;
    let boxColumn = matrixColumn - matrixColumn%3;
    for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
    if (matrix[boxRow + i][boxColumn + j] === n) {
    return false;
    }
    }
    }
    return true;
    }
    if (run()) {return matrix;}
    }