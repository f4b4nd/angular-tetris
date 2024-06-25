import { checkMatrixesDimensions, getNumberOfRows, getNumberOfColumns, containsValueGreaterThanOne, isVerticalFull } from "./matrix-utils"
import { canOperateMatrixes, operateMatrixes } from "./operateMatrixes"

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


export function onTryMoveTetromino (grid: Matrix, tetromino: Tetromino, offsetCoordinates: OffsetCoordinates) {

    const newTetrominoCoordinates = {
        x: tetromino.coordinates.x + offsetCoordinates.Xoffset,
        y: tetromino.coordinates.y + offsetCoordinates.Yoffset,
    }

    const gridWithoutTetromino = operateMatrixes(grid, tetromino.shape, tetromino.coordinates, '-')
    const newGrid = operateMatrixes(gridWithoutTetromino, tetromino.shape, newTetrominoCoordinates, '+')

    return {
        gridResult: newGrid,
        tetrominoResult: {...tetromino, coordinates: newTetrominoCoordinates},
        hasCellsCollisions: containsValueGreaterThanOne(newGrid),
        allowOperate: canOperateMatrixes(newGrid, tetromino.shape, newTetrominoCoordinates),
        isVerticalFull: isVerticalFull(newGrid),
    }

}


export function onTryRotateTetromino (grid: Matrix, tetromino: Tetromino, rotatedShape: Tetromino['shape']) {

    const gridWithoutTetromino = operateMatrixes(grid, tetromino.shape, tetromino.coordinates, '-')
    
    const allowOperate = canOperateMatrixes(gridWithoutTetromino, rotatedShape, tetromino.coordinates)

    let newGrid = grid

    if (allowOperate) {
        newGrid = operateMatrixes(gridWithoutTetromino, rotatedShape, tetromino.coordinates, '+')
    }

    return {
        gridResult: newGrid,
        tetrominoResult: {...tetromino, shape: rotatedShape},
        hasCellsCollisions: containsValueGreaterThanOne(newGrid),
        allowOperate,
    }

}