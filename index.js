function matrixGen(rows, columns){
    var result= [];
    for (var i = 0 ; i < rows; i++) {
        result[i] = [];
        for (var j = 0; j < columns; j++) {
            result[i][j] = (Math.random() * 5 | 0) + 6;
        }
    }
    return result;
}

matrixGen(3,3);

module.exports = matrixGen;