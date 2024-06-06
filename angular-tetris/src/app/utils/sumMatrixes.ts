export function sumMatrixes(M: number[][], T: number[][], Tcoords: {x: number, y: number}): number[][] {

    const checkSizes = true

    return M.map((row, i) => (
        row.map((_, j) => {
            const tx = i - Tcoords.y
            const ty = j - Tcoords.x
            if (tx >= 0 && ty >=0 && tx < T.length && ty < T[tx].length) {
                return M[i][j] + T[tx][ty]
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