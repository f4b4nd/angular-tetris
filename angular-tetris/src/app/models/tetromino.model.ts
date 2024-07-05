import { GRID_WIDTH } from "../utils/constants"
import { getNumberOfColumns } from "../utils/matrix-utils"


const initialShapes = {
    'I':  [[1], [1], [1], [1]],
    'J':  [[0, 1], [0, 1], [1, 1]],
    'L':  [[1, 0], [1, 0], [1, 1]],
    'O':  [[1, 1], [1, 1]],
    'S':  [[1, 0], [1, 1], [0, 1]],
    'T':  [[0, 1, 0], [1, 1, 1]],
    'Z':  [[0, 1], [1, 1], [1, 0]],
}

const baseShapes = {
    'I':  [[0, 0, 0, 0], [1, 1, 1, 1]],
    'J':  [[1, 1, 1, 0], [0, 0, 1, 0]],
    'L':  [[0, 0, 1, 0], [1, 1, 1, 0]],
    'O':  [[0, 1, 1, 0], [0, 1, 1, 0]],
    'S':  [[0, 1, 1, 0], [1, 1, 0, 0]],
    'T':  [[0, 1, 0, 0], [1, 1, 1, 0]],
    'Z':  [[1, 1, 0, 0], [0, 1, 1, 0]],
}

export const tetrominoModels: Array<Tetromino> = [
    {
        type: 'I',
        shape: initialShapes['I'],
        baseShape: baseShapes['I'],
        coordinates: getInitialCoordinates(initialShapes['I']),
    },
    {
        type: 'J',
        shape: initialShapes['J'],
        baseShape: baseShapes['J'],
        coordinates: getInitialCoordinates(initialShapes['J']),
    },
    {
        type: 'L',
        shape: initialShapes['L'],
        baseShape: baseShapes['L'],
        coordinates: getInitialCoordinates(initialShapes['L']),
    },
    {
        type: 'O',
        shape: initialShapes['O'],
        baseShape: baseShapes['O'],
        coordinates: getInitialCoordinates(initialShapes['O']),
    },
    {
        type: 'S',
        shape: initialShapes['S'],
        baseShape: baseShapes['S'],
        coordinates: getInitialCoordinates(initialShapes['S']),
    },
    {
        type: 'T',
        shape: initialShapes['T'],
        baseShape: baseShapes['T'],
        coordinates: getInitialCoordinates(initialShapes['T']),
    },
    {
        type: 'Z',
        shape: initialShapes['Z'],
        baseShape: baseShapes['Z'],
        coordinates: getInitialCoordinates(initialShapes['Z']),
    },
]


function getInitialCoordinates(tetrominoShape: Matrix): Coordinates {
    const numberOfColumns = getNumberOfColumns(tetrominoShape)
    const ceil = Math.ceil(GRID_WIDTH / 2)
    const x = numberOfColumns > 1 ? ceil - 1 : ceil

    return {
        x,
        y: 0
    }
}
