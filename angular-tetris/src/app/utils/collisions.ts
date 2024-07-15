import { checkMatrixesDimensions, getNumberOfRows, getNumberOfColumns, containsValueGreaterThanOne } from "./matrix-utils"
import { canOperateMatrixes, addTetrominoToGrid, removeTetrominoFromGrid } from "./operateMatrixes"
export function isBottomCollision (M: Matrix, T: Matrix, Tcoords: Coordinates): boolean {

    if (!checkMatrixesDimensions(M, T)) return true

    const bottomCollision = getNumberOfRows(M) <= Tcoords.y + getNumberOfRows(T)

    if (bottomCollision) return true

    return false

}

export function isRightCollision (M: Matrix, T: Matrix, Tcoords: Coordinates): boolean {
    
    if (!checkMatrixesDimensions(M, T)) return true

    const isCollision = getNumberOfColumns(M) <= Tcoords.x + getNumberOfColumns(T)

    return isCollision

}

export function isLeftCollision (M: Matrix, T: Matrix, Tcoords: Coordinates): boolean {
    
    if (!checkMatrixesDimensions(M, T)) return true

    const isCollision = Tcoords.x <= 0

    return isCollision

}

export function isTopCollision (M: Matrix, tetrominoShape: Matrix, Tcoords: Coordinates): boolean {

    const tetriminoBottom =  tetrominoShape[getNumberOfRows(tetrominoShape) - 1]
    const matrixTopRow = M[getNumberOfRows(tetrominoShape)]
    const matrixTop = matrixTopRow.filter((_, idx) => idx >= Tcoords.x && idx < Tcoords.x + getNumberOfColumns(tetrominoShape))
    
    const sumRows = matrixTop.map((m, idx) => m + tetriminoBottom[idx])

    const isCollision = Tcoords.y <= 0 && sumRows.some(v => v > 1)

    return isCollision


}


export function onTryMoveTetromino (grid: Matrix, tetromino: Tetromino, offsetCoordinates: OffsetCoordinates) {

    const newTetrominoCoordinates = {
        x: tetromino.coordinates.x + offsetCoordinates.Xoffset,
        y: tetromino.coordinates.y + offsetCoordinates.Yoffset,
    }

    const gridWithoutTetromino = removeTetrominoFromGrid(grid, tetromino.shape, tetromino.coordinates)
    const newGrid = addTetrominoToGrid(gridWithoutTetromino, tetromino.shape, newTetrominoCoordinates)

    return {
        gridResult: newGrid,
        tetrominoResult: {...tetromino, coordinates: newTetrominoCoordinates},
        hasCellsCollisions: newTetrominoCoordinates.y > 0 && containsValueGreaterThanOne(newGrid),
        allowOperate: canOperateMatrixes(newGrid, tetromino.shape, newTetrominoCoordinates),
        isTopCollision: isTopCollision(grid, tetromino.shape, tetromino.coordinates),
        hasCellsCollisionsOnTop:  tetromino.coordinates.y === 0 && containsValueGreaterThanOne(grid),
    }

}


export function onTryRotateTetromino (grid: Matrix, tetromino: Tetromino, rotatedShape: Tetromino['shape']) {

    const gridWithoutTetromino = removeTetrominoFromGrid(grid, tetromino.shape, tetromino.coordinates)
    
    const allowOperate = canOperateMatrixes(gridWithoutTetromino, rotatedShape, tetromino.coordinates)

    let newGrid = grid

    if (allowOperate) {
        newGrid = addTetrominoToGrid(gridWithoutTetromino, rotatedShape, tetromino.coordinates)
    }

    return {
        gridResult: newGrid,
        tetrominoResult: {...tetromino, shape: rotatedShape},
        hasCellsCollisions: containsValueGreaterThanOne(newGrid),
        allowOperate,
    }

}