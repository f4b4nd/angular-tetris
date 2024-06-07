import { getTransposedMatrix } from "./rotateMatrix"

export function operateMatrixes(M: Matrix, T: Matrix, Tcoords: Coordinates, operation: '+' | '-'): Matrix {

    function isWithinRows(x: number) {
        return (x >= 0) && (x < T.length) 
    }

    function isWithinColumns(x: number, y: number) {
        return (y >= 0) && (y < T[x].length)
    }

    return M.map((row, i) => (
        row.map((_, j) => {

            const relativeCoords = {
                x: i - Tcoords.y,
                y: j - Tcoords.x,
            }

            const coordinatesAreMatching = isWithinRows(relativeCoords.x) && isWithinColumns(relativeCoords.x, relativeCoords.y) 
            
            if (coordinatesAreMatching) {
                switch(operation) {
                    case '+':
                        return M[i][j] + T[relativeCoords.x][relativeCoords.y]
                    case '-':
                        return M[i][j] - T[relativeCoords.x][relativeCoords.y]
                    default:
                        throw Error('operation is not defined')
                }
            }
            else {
                return M[i][j]
            }
        })
    ))

}

export function containsValueGreaterThanOne(matrix: Matrix): boolean {
    for (let row of matrix) {
        for (let value of row) {
            if (value > 1) return true
        }
    }
    return false
}

function areAllValuesEqualOne (arr: number[]): boolean {
    return arr.every(v => v === 1)
}

export function numberOfFullRows (matrix: Matrix): number {
    return matrix.reduce((acc, curr) => {
        return areAllValuesEqualOne(curr) ? acc +=1 : acc
    }, 0)
}


export function getMatrixDeleteFullRows (matrix: Matrix): Matrix {

    let cleanMatrix = matrix.filter(row => !areAllValuesEqualOne(row))
    
    const emptyRow = Array(10).fill(0)

    for (let i = 0; i < numberOfFullRows(matrix); i++) {
        cleanMatrix.unshift(emptyRow)
    }

    return cleanMatrix
}

function getNumberOfRows (matrix: Matrix): number {
    return  matrix.length 
}
    
function getNumberOfColumns (matrix: Matrix): number {
    // all subarrays should have same length
    return matrix.reduce((acc, curr) => {

        if (acc > 0 && acc !== curr.length) {
            throw Error("all subarrays don't have same length !")
        }
        return curr.length

    }, 0)
}

function checkMatrixesDimensions (M: Matrix, T: Matrix) : boolean {

    const checkColumns = getNumberOfColumns(M) >= getNumberOfColumns(T)
    const checkRows = getNumberOfRows(M) >= getNumberOfRows(T)

    return checkColumns && checkRows
}


export function isLeftCollision (M: Matrix, T: Matrix, Tcoords: Coordinates): boolean {
    
    if (!checkMatrixesDimensions(M, T)) return true

    const isCollision = Tcoords.x <= 0

    return isCollision

}

export function isRightCollision (M: Matrix, T: Matrix, Tcoords: Coordinates): boolean {
    
    if (!checkMatrixesDimensions(M, T)) return true

    const isCollision = getNumberOfColumns(M) <= Tcoords.x + getNumberOfColumns(T)

    return isCollision

}

export function isBottomCollision (M: Matrix, T: Matrix, Tcoords: Coordinates): boolean {

    if (!checkMatrixesDimensions(M, T)) return true

    const bottomCollision = getNumberOfRows(M) <= Tcoords.y + getNumberOfRows(T)

    if (bottomCollision) return true

    return false

}

export function getMatrixApplyGravity (M: Matrix): Matrix {
    // Move down "floating" non-empty cells to the bottom of the matrix. 

    let transposedMatrix = getTransposedMatrix(M)

    transposedMatrix = transposedMatrix.map(row => row.sort((a, b) => a <= b ? -1 : 1))

    return getTransposedMatrix(transposedMatrix)
    
}

const M = [
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],   
    [0, 0, 0, 1],
    [0, 0, 0, 0],
    [1, 1, 0, 1],
]

const M2 = [
    [0, 0],
]
const T = [
    [1, 0],
    [1, 0],
    [1, 1],
]

/*
isOutOfBounds

oui si M.ncols < T.ncols 
oui si M.nrows < T.nrows
oui si Ty + T.ncols < M.ncols
oui si Tx + T.nrows < M.nrows

*/
const Tcoords = { x: 1, y: 2 }


/*
(i=2; j=1) ----> M[i][j] + T[i-y = 0][j-x = 0]
(i=2; j=2) ----> M[i][j] + T[i-y = 0][j-x = 1]

(i=3; j=1) ----> M[i][j] + T[i-y = 1][j-x = 0]
M[3, 2] + T[1][1]

M[4][1] + T[2][0]
M[4][2] + T[2][1]
*/

const res : Matrix = [
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
]

const M3 = [
    [1,  2,  3,  4],
    [5,  6,  7,  8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
]

const T2 = [
    [1, 2, 3, 4, 5],
]

const a = numberOfFullRows(M)
const b = numberOfFullRows(res)
const c = getMatrixApplyGravity(M)
console.log(M ,'c>>>>', c)
