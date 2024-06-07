import { getTransposedMatrix } from "./rotateMatrix"


export function canOperateMatrixes(M: Matrix, T: Matrix, Tcoords: Coordinates): boolean {
   
    const relativeNumberOfRows = getNumberOfRows(T) + Tcoords.y
    const relativeNumberOfColumns = getNumberOfColumns(T) + Tcoords.x

    const canOperateVertical = relativeNumberOfRows >= 0 && relativeNumberOfRows <= getNumberOfRows(M)
    const canOperateHorizontal = relativeNumberOfColumns >= 0 && relativeNumberOfColumns <= getNumberOfColumns(M)

    return canOperateVertical && canOperateHorizontal

}

export function operateMatrixes(M: Matrix, T: Matrix, Tcoords: Coordinates, operation: '+' | '-'): Matrix {

    const allowOperate = canOperateMatrixes(M, T, Tcoords)

    if (!allowOperate) {
        throw Error("cannot operate matrixes")
    }


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

export function getNumberOfRows (matrix: Matrix): number {
    return  matrix.length 
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

export function isVerticalFull (M: Matrix): boolean {

    const transposedMatrix = getTransposedMatrix(M)

    const numberOfFullColumns = transposedMatrix.reduce((acc, curr) => (
        curr.every(v => v === 1) ? acc+1 : acc
    ), 0)

    return numberOfFullColumns > 0
}

const M = [
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
]

const T = [
    [1, 1, 1],
    [1, 1, 1],
]


const c1_ok = {x: 1, y: 1}
const c2_ko = {x: 1, y: 2}
const c3_ko = {x: 2, y: 1}

/**
M_L=4 et M_C=3
T_L=2 et T_C=3

T_L + X <= M_L
T_C + Y <= M_C

*/
