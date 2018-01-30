function equalPairsCount(matrix) {
    let count = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let rightNeighbor = matrix[i][j + 1];
            if (rightNeighbor !== undefined && rightNeighbor === matrix[i][j]) {
                count++;
            }

            if (i > 0) {
                let upNeighbor = matrix[i - 1][j];
                if (upNeighbor !== undefined && upNeighbor === matrix[i][j]) {
                    count++;
                }
            }
        }
    }

    return count;
}