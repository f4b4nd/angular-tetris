import { getTransposedMatrix } from "./rotateMatrix"
import { getNumberOfColumns, getNumberOfRows } from "./matrix-utils"

export function canOperateMatrixes(M: Matrix, T: Matrix, Tcoords: Coordinates): boolean {
   
    const relativeNumberOfRows = getNumberOfRows(T) + Tcoords.y
    const relativeNumberOfColumns = getNumberOfColumns(T) + Tcoords.x

    const canOperateVertical = relativeNumberOfRows >= 0 && relativeNumberOfRows <= getNumberOfRows(M)
    const canOperateHorizontal = relativeNumberOfColumns >= 0 && relativeNumberOfColumns <= getNumberOfColumns(M)

    return canOperateVertical && canOperateHorizontal

}

function getIndexesFromCoords (coords: {x: number, y: number})  {
    return {
        colIndex: coords.x,
        rowIndex: coords.y,
    }
}

export function operateMatrixes(M: Matrix, T: Matrix, Tcoords: Coordinates, operation: '+' | '-'): Matrix {

    const allowOperate = canOperateMatrixes(M, T, Tcoords)

    if (!allowOperate) {
        throw Error("cannot operate matrixes")
    }


    return M.map((row, i) => (
        row.map((_, j) => {
            
            const tetriminoIndexes = getIndexesFromCoords ({x: j - Tcoords.x, y: i - Tcoords.y})

            const isWithinRows = tetriminoIndexes.rowIndex >= 0 && tetriminoIndexes.rowIndex < T.length

            const isWithinColumns = tetriminoIndexes.colIndex >= 0 && tetriminoIndexes.colIndex < T[tetriminoIndexes.rowIndex]?.length

            const coordinatesAreMatching = isWithinRows && isWithinColumns 
            
            if (!coordinatesAreMatching) return M[i][j]
            
            switch(operation) {
                case '+':
                    return M[i][j] + T[tetriminoIndexes.rowIndex][tetriminoIndexes.colIndex]
                case '-':
                    return M[i][j] - T[tetriminoIndexes.rowIndex][tetriminoIndexes.colIndex]
                default:
                    throw Error('operation is not defined')
            }
           
        })
    ))

}
