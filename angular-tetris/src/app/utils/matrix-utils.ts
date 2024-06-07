import { getTransposedMatrix } from "./rotateMatrix"

export function getNumberOfRows (matrix: Matrix): number {
    return matrix.length 
}
    
export function getNumberOfColumns (matrix: Matrix): number {
    // all subarrays should have same length
    return matrix.reduce((acc, curr) => {

        if (acc > 0 && acc !== curr.length) {
            throw Error("all subarrays don't have same length !")
        }
        return curr.length

    }, 0)
}

export function getNumberOfFullRows (matrix: Matrix): number {
    return matrix.reduce((acc, curr) => {
        return areAllValuesEqualOne(curr) ? acc +=1 : acc
    }, 0)
}

function areAllValuesEqualOne (arr: number[]): boolean {
    return arr.every(v => v === 1)
}




export function getMatrixDeleteFullRows (matrix: Matrix): Matrix {

    let cleanMatrix = matrix.filter(row => !areAllValuesEqualOne(row))
    
    const emptyRow = Array(10).fill(0)

    for (let i = 0; i < getNumberOfFullRows(matrix); i++) {
        cleanMatrix.unshift(emptyRow)
    }

    return cleanMatrix
}



export function checkMatrixesDimensions (M: Matrix, T: Matrix) : boolean {

    const checkColumns = getNumberOfColumns(M) >= getNumberOfColumns(T)
    const checkRows = getNumberOfRows(M) >= getNumberOfRows(T)

    return checkColumns && checkRows
}



export function getMatrixApplyGravity (M: Matrix): Matrix {
    // Move down "floating" non-empty cells to the bottom of the matrix. 

    let transposedMatrix = getTransposedMatrix(M)

    transposedMatrix = transposedMatrix.map(row => row.sort((a, b) => a <= b ? -1 : 1))

    return getTransposedMatrix(transposedMatrix)
    
}

export function containsValueGreaterThanOne(matrix: Matrix): boolean {
    for (let row of matrix) {
        for (let value of row) {
            if (value > 1) return true
        }
    }
    return false
}


export function isVerticalFull (M: Matrix): boolean {

    const transposedMatrix = getTransposedMatrix(M)

    const numberOfFullColumns = transposedMatrix.reduce((acc, curr) => (
        curr.every(v => v === 1) ? acc+1 : acc
    ), 0)

    return numberOfFullColumns > 0
}
