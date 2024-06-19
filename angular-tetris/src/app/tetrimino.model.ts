import { GRID_WIDTH } from "./utils/constants"
import { getNumberOfColumns } from "./utils/matrix-utils"


const initialShapes = {
    'I':  [[1], [1], [1], [1]],
    'J':  [[0, 1], [0, 1], [1, 1]],
    'L':  [[1, 0], [1, 0], [1, 1]],
    'O':  [[1, 1], [1, 1]],
    'S':  [[1, 0], [1, 1], [0, 1]],
    'T':  [[0, 1, 0], [1, 1, 1]],
    'Z':  [[0, 1], [1, 1], [1, 0]],
}

const nextShapes = {
    'I':  [[0, 0, 0, 0], [1, 1, 1, 1]],
    'J':  [[1, 1, 1, 0], [0, 0, 1, 0]],
    'L':  [[0, 0, 1, 0], [1, 1, 1, 0]],
    'O':  [[0, 1, 1, 0], [0, 1, 1, 0]],
    'S':  [[0, 1, 1, 0], [1, 1, 0, 0]],
    'T':  [[0, 1, 0, 0], [1, 1, 1, 0]],
    'Z':  [[1, 1, 0, 0], [0, 1, 1, 0]],
}

export const tetriminoModels: Array<Tetrimino> = [
    {
        type: 'I',
        shape: initialShapes['I'],
        nextShape: nextShapes['I'],
        coordinates: getInitialCoordinates(initialShapes['I']),
    },
    {
        type: 'J',
        shape: initialShapes['J'],
        nextShape: nextShapes['J'],
        coordinates: getInitialCoordinates(initialShapes['J']),
    },
    {
        type: 'L',
        shape: initialShapes['L'],
        nextShape: nextShapes['L'],
        coordinates: getInitialCoordinates(initialShapes['L']),
    },
    {
        type: 'O',
        shape: initialShapes['O'],
        nextShape: nextShapes['O'],
        coordinates: getInitialCoordinates(initialShapes['O']),
    },
    {
        type: 'S',
        shape: initialShapes['S'],
        nextShape: nextShapes['S'],
        coordinates: getInitialCoordinates(initialShapes['S']),
    },
    {
        type: 'T',
        shape: initialShapes['T'],
        nextShape: nextShapes['T'],
        coordinates: getInitialCoordinates(initialShapes['T']),
    },
    {
        type: 'Z',
        shape: initialShapes['Z'],
        nextShape: nextShapes['Z'],
        coordinates: getInitialCoordinates(initialShapes['Z']),
    },
]


function getInitialCoordinates(tetriminoShape: Matrix): Coordinates {
    const numberOfColumns = getNumberOfColumns(tetriminoShape)
    const ceil = Math.ceil(GRID_WIDTH / 2)
    const x = numberOfColumns > 1 ? ceil - 1 : ceil

    return {
        x,
        y: 0
    }
}
