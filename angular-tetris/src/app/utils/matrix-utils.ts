import { getTransposedMatrix } from "./rotateMatrix"
import { GRID_WIDTH } from "./constants"

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


export function getMatrixCleanFullRows (matrix: Matrix): Matrix {

    let cleanMatrix = matrix.filter(row => !areAllValuesEqualOne(row))
    
    const deltaRows = matrix.length - cleanMatrix.length

    for (let i = 0; i < deltaRows; i++) {
        const emptyRow = Array(GRID_WIDTH).fill(0)
        cleanMatrix.unshift(emptyRow)
    }

    return cleanMatrix
}



export function checkMatrixesDimensions (M: Matrix, T: Matrix) : boolean {

    const checkColumns = getNumberOfColumns(M) >= getNumberOfColumns(T)
    const checkRows = getNumberOfRows(M) >= getNumberOfRows(T)

    return checkColumns && checkRows
}




export function containsValueGreaterThanOne(matrix: Matrix): boolean {
    for (let row of matrix) {
        for (let value of row) {
            if (value > 1) return true
        }
    }
    return false
}


