import { checkMatrixesDimensions, getNumberOfRows, getNumberOfColumns, containsValueGreaterThanOne } from "./matrix-utils"
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


export function onTryMoveTetrimino (grid: Matrix, tetrimino: Tetrimino, offsetCoordinates: OffsetCoordinates) {

    const newTetriminoCoordinates = {
        x: tetrimino.coordinates.x + offsetCoordinates.Xoffset,
        y: tetrimino.coordinates.y + offsetCoordinates.Yoffset,
    }

    const gridWithoutTetrimino = operateMatrixes(grid, tetrimino.shape, tetrimino.coordinates, '-')
    const newGrid = operateMatrixes(gridWithoutTetrimino, tetrimino.shape, newTetriminoCoordinates, '+')

    return {
        gridResult: newGrid,
        tetriminoResult: {...tetrimino, coordinates: newTetriminoCoordinates},
        hasCellsCollisions: containsValueGreaterThanOne(newGrid),
        allowOperate: canOperateMatrixes(newGrid, tetrimino.shape, newTetriminoCoordinates),
    }

}


export function onTryRotateTetrimino (grid: Matrix, tetrimino: Tetrimino, rotatedShape: Tetrimino['shape']) {

    const gridWithoutTetrimino = operateMatrixes(grid, tetrimino.shape, tetrimino.coordinates, '-')
    
    const allowOperate = canOperateMatrixes(gridWithoutTetrimino, rotatedShape, tetrimino.coordinates)

    let newGrid = grid

    if (allowOperate) {
        newGrid = operateMatrixes(gridWithoutTetrimino, rotatedShape, tetrimino.coordinates, '+')
    }

    return {
        gridResult: newGrid,
        tetriminoResult: {...tetrimino, shape: rotatedShape},
        hasCellsCollisions: containsValueGreaterThanOne(newGrid),
        allowOperate,
    }

}