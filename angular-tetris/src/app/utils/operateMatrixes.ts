import { booleanAttribute } from "@angular/core"

export function operateMatrixes(M: number[][], T: number[][], Tcoords: {x: number, y: number}, operation: '+' | '-'): number[][] {

    function isWithinRows(x: number) {
        return (x >= 0) && (x < T.length) 
    }

    function isWithinColumns(x: number, y: number) {
        return (y >= 0) && (y < T[x].length)
    }


    return M.map((row, i) => (
        row.map((cell, j) => {

            const relativeCoords = {
                x: i - Tcoords.y,
                y: j - Tcoords.x,
            }

            const coordinatesAreMatching = isWithinRows(relativeCoords.x) && isWithinColumns(relativeCoords.x, relativeCoords.y) 
            
            if (coordinatesAreMatching) {
                switch(operation) {
                    case '+':
                        return cell + T[relativeCoords.x][relativeCoords.y]
                    case '-':
                        return cell - T[relativeCoords.x][relativeCoords.y]
                    default:
                        throw Error('operation is not defined')
                }
            }
            else {
                return cell
            }
        })
    ))

}

function containsValueGreaterThanOne(matrix: number[][]): boolean {
    for (let row of matrix) {
        for (let value of row) {
            if (value > 1) return true
        }
    }
    return false
}



function matrixesWontCollide (M: number[][], T: number[][]) {
    
}

export function sumMatrixesIsOutOfBounds (M: number[][], T: number[][], Tcoords: {x: number, y: number}): boolean {

    const numberOfRows = (matrix: number[][]) => matrix.length
    
    const numberOfColumns = (matrix: number[][]) => matrix[0] && matrix[0].length

    const bottomCollision = numberOfRows(M) <= Tcoords.y + numberOfRows(T)
    const rightCollision = numberOfColumns(M) <= Tcoords.x + numberOfColumns(T)
    const leftCollision = Tcoords.x <= 0

    if (numberOfColumns(M) < numberOfColumns(T)) return true

    if (numberOfRows(M) < numberOfRows(T)) return true

    if (bottomCollision) return true

    if (rightCollision) return true

    if (leftCollision) return true

    return false

}


const M = [
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
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

const res : number[][] = [
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

