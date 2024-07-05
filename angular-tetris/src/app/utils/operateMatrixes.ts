import { getNumberOfColumns, getNumberOfRows } from "./matrix-utils"

export function canOperateMatrixes(M: Matrix, T: Matrix, Tcoords: Coordinates): boolean {
   
    const relativeNumberOfRows = getNumberOfRows(T) + Tcoords.y
    const relativeNumberOfColumns = getNumberOfColumns(T) + Tcoords.x

    const canOperateVertical =  relativeNumberOfRows <= getNumberOfRows(M)
    const canOperateHorizontal = relativeNumberOfColumns >= 0 && relativeNumberOfColumns <= getNumberOfColumns(M)

    return canOperateVertical && canOperateHorizontal

}


export function addTetrominoToGrid (grid: Matrix, tetrominoShape: Tetromino['shape'], tetrominoCoordinates: Tetromino['coordinates']): Matrix {
    
    const allowOperate = canOperateMatrixes(grid, tetrominoShape, tetrominoCoordinates)

    if (!allowOperate) {
        throw Error("cannot operate matrixes")
    }

    const gridCopy = grid.map(row => [...row]) // deep-copy level 2

    tetrominoShape.forEach((row, rowIdx) => {
        row.forEach((cell, colIdx) => {
            const i = tetrominoCoordinates.y + rowIdx
            const j = tetrominoCoordinates.x + colIdx
            gridCopy[i][j] += cell
        })
    })

    return gridCopy
}

export function removeTetrominoFromGrid (grid: Matrix, tetrominoShape: Tetromino['shape'], tetrominoCoordinates: Tetromino['coordinates']): Matrix {

    const allowOperate = canOperateMatrixes(grid, tetrominoShape, tetrominoCoordinates)

    if (!allowOperate) {
        throw Error("cannot operate matrixes")
    }

    const gridCopy = grid.map(row => [...row]) // deep-copy level 2

    tetrominoShape.forEach((row, rowIdx) => {
        row.forEach((cell, colIdx) => {
            const i = tetrominoCoordinates.y + rowIdx
            const j = tetrominoCoordinates.x + colIdx
            gridCopy[i][j] -= cell
        })
    })

    return gridCopy
}