export function getRotatedMatrix (matrix: number[][], clockwise: boolean = true): number[][] {

    const transposedMatrix = getTransposedMatrix(matrix)

    return clockwise ? getReversedColumnsMatrix(transposedMatrix) : getReversedRowsMatrix(transposedMatrix)

}

export function getTransposedMatrix(matrix: number[][] ): number[][] {

    return matrix.reduce((acc, row) => {
        
        row.forEach((_, j) => {

            if (!acc[j]) {
                acc[j] = []
            }

            acc[j].push(row[j])
  
        })

        return acc

    }, [] as number[][])

}

export function getReversedRowsMatrix (matrix: number[][]): number[][] {
    return matrix.map((_, i, T) => {
        return T[T.length - 1 - i]
    })
}

export function getReversedColumnsMatrix (matrix: number[][]): number[][] {
    return matrix.map(row => row.reverse())
}

const M = [
    [1, 2],
    [3, 4],
    [5, 6],
]

const T = [
    [1, 3, 5],
    [2, 4, 6],
]

const a = getTransposedMatrix(M)
const b = getReversedColumnsMatrix(M)
const c = getReversedColumnsMatrix(M)
console.log(c)