import { getTransposedMatrix } from "./rotateMatrix"
import { getNumberOfColumns, getNumberOfRows } from "./matrix-utils"

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
