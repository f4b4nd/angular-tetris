import { getTransposedMatrix } from "./rotateMatrix"
import { getNumberOfColumns, getNumberOfRows } from "./matrix-utils"

export function canOperateMatrixes(M: Matrix, T: Matrix, Tcoords: Coordinates): boolean {
   
    const relativeNumberOfRows = getNumberOfRows(T) + Tcoords.y
    const relativeNumberOfColumns = getNumberOfColumns(T) + Tcoords.x

    const canOperateVertical = relativeNumberOfRows >= 0 && relativeNumberOfRows <= getNumberOfRows(M)
    const canOperateHorizontal = relativeNumberOfColumns >= 0 && relativeNumberOfColumns <= getNumberOfColumns(M)

    return canOperateVertical && canOperateHorizontal

}


export function addTetrominoToGrid (grid: Matrix, tetrominoShape: Tetromino['shape'], tetrominoCoordinates: Tetromino['coordinates']): Matrix {
    
    const allowOperate = canOperateMatrixes(grid, tetrominoShape, tetrominoCoordinates)

    if (!allowOperate) {
        throw Error("cannot operate matrixes")
    }


    let grid2 = grid.map(row => [...row]);

    tetrominoShape.forEach((row, rowIdx) => {
        row.forEach((cell, colIdx) => {
            const i = tetrominoCoordinates.y + rowIdx
            const j = tetrominoCoordinates.x + colIdx
            grid2[i][j] = grid[i][j] + cell
        })
    })

    return grid2
}

export function removeTetrominoFromGrid (grid: Matrix, tetrominoShape: Tetromino['shape'], tetrominoCoordinates: Tetromino['coordinates']): Matrix {

    const allowOperate = canOperateMatrixes(grid, tetrominoShape, tetrominoCoordinates)

    if (!allowOperate) {
        throw Error("cannot operate matrixes")
    }


    let grid2 = grid.map(row => [...row])

    tetrominoShape.forEach((row, rowIdx) => {
        row.forEach((cell, colIdx) => {
            const i = tetrominoCoordinates.y + rowIdx
            const j = tetrominoCoordinates.x + colIdx
            grid2[i][j] = grid[i][j] - cell
        })
    })

    return grid2
}