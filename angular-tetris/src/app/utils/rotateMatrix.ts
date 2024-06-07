export function getRotatedMatrix (matrix: Matrix, degrees: '90deg' | '-90deg'): Matrix {

    switch (degrees) {
        case '90deg': {
            const transposedMatrix = getTransposedMatrix(matrix)
            return getReversedColumnsMatrix(transposedMatrix)
        }
        case '-90deg': {
            const transposedMatrix = getTransposedMatrix(matrix)
            return getReversedRowsMatrix(transposedMatrix)
        }
        default:
            throw Error('rotation not supported')
    }

}

export function getTransposedMatrix(matrix: Matrix): Matrix {

    return matrix.reduce((acc, row) => {
        
        row.forEach((_, j) => {

            if (!acc[j]) {
                acc[j] = []
            }

            acc[j].push(row[j])
  
        })

        return acc

    }, [] as Matrix)

}

export function getReversedRowsMatrix (matrix: Matrix): Matrix {

    if (!(matrix.length > 0)) return matrix

    return matrix.map((_, i, T) => {
        return T[T.length - 1 - i]
    })
}

export function getReversedColumnsMatrix (matrix: Matrix): Matrix {
    return matrix.map(row => row.reverse())
}