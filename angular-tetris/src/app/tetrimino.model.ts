import { GRID_WIDTH } from "./utils/constants"
import { getNumberOfColumns } from "./utils/operateMatrixes"


const initialShapes = {
    'I':  [[1], [1], [1], [1]],
    'L':  [[1, 0], [1, 0], [1, 1]],
    'O':  [[1, 1], [1, 1]],
    'S':  [[1, 0], [1, 1], [0, 1]],
    'T':  [[0, 1, 0], [1, 1, 1]],
    'Z':  [[0, 1], [1, 1], [1, 0]],
}

function getInitialCoordinates(tetriminoShape: Matrix): Coordinates {
    const numberOfColumns = getNumberOfColumns(tetriminoShape)
    const ceil = Math.ceil(GRID_WIDTH / 2)
    const x = numberOfColumns > 1 ? ceil - 1 : ceil

    return {
        x,
        y: 0
    }
}


export const tetriminoModels: Array<Tetrimino> = [
    {
        type: 'I',
        shape: initialShapes['I'],
        coordinates: getInitialCoordinates(initialShapes['I']),
    },
    {
        type: 'L',
        shape: initialShapes['L'],
        coordinates: getInitialCoordinates(initialShapes['L']),
    },
    {
        type: 'O',
        shape: initialShapes['O'],
        coordinates: getInitialCoordinates(initialShapes['O']),
    },
    {
        type: 'S',
        shape: initialShapes['S'],
        coordinates: getInitialCoordinates(initialShapes['S']),
    },
    {
        type: 'T',
        shape: initialShapes['T'],
        coordinates: getInitialCoordinates(initialShapes['T']),
    },
    {
        type: 'Z',
        shape: initialShapes['Z'],
        coordinates: getInitialCoordinates(initialShapes['Z']),
    },
]
