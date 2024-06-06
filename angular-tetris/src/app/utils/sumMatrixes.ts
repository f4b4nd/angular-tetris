export function operateMatrixes(M: number[][], T: number[][], Tcoords: {x: number, y: number}, operation: '+' | '-'): number[][] {

    const checkSizes = true

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

            const coordinAtesAreMatching = isWithinRows(relativeCoords.x) && isWithinColumns(relativeCoords.x, relativeCoords.y) 
            
            if (coordinAtesAreMatching) {
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



const M = [
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],

]
const T = [
    [1, 0],
    [1, 0],
    [1, 1],
]

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